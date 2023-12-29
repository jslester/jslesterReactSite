import { useEffect, useState } from "react";
import "./RecipeList.css";
import {AuthTokenRetrieve, LoginButton, LogoutButton} from "../Utility/AuthTokenRetrieve";
const AddRecipe = () => {
  const [inputs, setInputs] = useState({});
  const [shouldShow, setShouldShow] = useState();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  let {shouldShow:shouldShowGoogle} = AuthTokenRetrieve();
  useEffect(() => {
    setShouldShow(shouldShowGoogle);
  }, [shouldShowGoogle]);

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
              <LogoutButton setShouldShow={setShouldShow}></LogoutButton>
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
                {/*<input
                  type="text"
                  name="Type"
                  className="inputBox addInput"
                  value={inputs.Type || ""}
          onChange={handleChange} />*/}

                
                <select
            type="Select"
            name="Type"
            className="inputBox addInput"
            value={inputs.Type || ""}
            onChange={handleChange}>
          
            <option>All</option>
            <option>Mexican</option>
            <option>Pasta</option>
            <option>Dessert</option>
            <option>Misc</option>
          </select>
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
        <LoginButton setShouldShow={setShouldShow}></LoginButton>
        
      )}
    </div>
  );
};
export default AddRecipe;
