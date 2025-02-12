import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body{
    background-color: #323334;
    color: white;
    min-height: 100vh;
    font-family:  'Poppins', sans-serif;
  }

`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
