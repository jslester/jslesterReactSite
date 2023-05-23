import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="1078885175696-jo3ad9nn6n93par1sdrethq1k40kefb0.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
