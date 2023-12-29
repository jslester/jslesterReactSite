import { useState, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
const AuthTokenRetrieve = (props) =>{
    //const {url, skip} = props;
    const [shouldShow, setShouldShow] = useState(false);
    const [error, setError] = useState(null);
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
                console.log(data);
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

    return { shouldShow, error };
}
const LoginButton = (props)=>{
    const {setShouldShow} = props;
    const {errorText, setErrorText} = useState('');
    const errorMessage = (error) => {
        console.log(error);
      };
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

    return (
        <div style={{ width: "300px" }}>
          <p>{errorText ? errorText : ""}</p>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    )
}
const LogoutButton = (props)=>{
    const{setShouldShow} = props;
    const logOut = () => {
        googleLogout();
        setShouldShow(false);
        localStorage.removeItem("lesterAccessToken");
      };
    return( 
        <button className="summaryButton" onClick={logOut}>
            Log out
        </button>)
    
}
export {
    AuthTokenRetrieve,
    LoginButton,
    LogoutButton
  }