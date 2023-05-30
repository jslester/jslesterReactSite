import { useEffect, useState } from "react";
import "./RecipeList.css";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const AddRecipe = () => {
  const [inputs, setInputs] = useState({});
  const [shouldShow, setShouldShow] = useState(false);
  const [errorText, setErrorText] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    if (localStorage.getItem("lesterAccessToken")) {
      const accessToken = localStorage.getItem("lesterAccessToken");
      //callout for valid accessToken
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken: accessToken, type: "validate" }),
      };

      fetch("https://jslester.com/food/access", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            setShouldShow(true);
          } else {
            setShouldShow(false);
          }
        });
    } else {
      setShouldShow(false);
    }
  }, []);
  //useffect -> check if token in local storage. If yes,
  // then call backend server with that info, return yes or no, display form if yes
  // if not, show google login button

  //on google login, call endpoint with email and access token
  //if email is in table, then return valid
  const responseMessage = (response) => {
    const userObject = jwt_decode(response.credential);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userObject.email, type: "NewToken" }),
    };

    fetch("https://jslester.com/food/access", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          localStorage.setItem("lesterAccessToken", data[0].accessToken);
          setShouldShow(true);
        } else {
          setErrorText("User not authorized to add recipes");
        }
      });
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  const logOut = () => {
    googleLogout();
    setShouldShow(false);
    localStorage.removeItem("lesterAccessToken");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs }),
    };

    fetch("https://jslester.com/food/server", requestOptions)
      .then((response) => response.json())
      .then((data) => setInputs({}));
  };
  return (
    <div style={{ width: "100%" }}>
      {shouldShow ? (
        <div className="searchBarDiv formViewWrapper">
          <form
            onSubmit={handleSubmit}
            style={{
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div style={{ width: "100%", display: "flex" }}>
              <button className="summaryButton" onClick={logOut}>
                Log out
              </button>
              <input className="summaryButton" type="submit" />
            </div>
            <div className="inputSingleForm">
              <div className="inputDiv">
                <label>Name</label>
                <input
                  type="text"
                  name="Name"
                  className="inputBox addInput"
                  value={inputs.Name || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="inputDiv">
                <label>Link</label>
                <input
                  type="text"
                  name="Link"
                  className="inputBox addInput"
                  value={inputs.Link || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="inputDiv">
                <label>Type</label>
                <input
                  type="text"
                  name="Type"
                  className="inputBox addInput"
                  value={inputs.Type || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="inputDiv">
                <label>Author</label>
                <input
                  type="text"
                  name="Author"
                  className="inputBox addInput"
                  value={inputs.Author || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="inputDiv">
                <label>EstimatedTime</label>
                <input
                  type="text"
                  name="EstimatedTime"
                  className="inputBox addInput"
                  value={inputs.EstimatedTime || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="inputDiv textAreaDiv">
              <label>Ingredients</label>
              <textarea
                type="text"
                name="Ingredients"
                className="inputBox textAreaAdd"
                value={inputs.Ingredients || ""}
                onChange={handleChange}
              />
            </div>
            <div className="inputDiv textAreaDiv">
              <label>Instructions:</label>
              <textarea
                type="text"
                name="Instructions"
                className="inputBox textAreaAdd"
                value={inputs.Instructions || ""}
                onChange={handleChange}
              />
            </div>
            <div style={{ width: "100%" }}></div>
          </form>
        </div>
      ) : (
        <div style={{ width: "300px" }}>
          <p>{errorText ? errorText : ""}</p>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
      )}
    </div>
  );
};
export default AddRecipe;
