import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavoriteMemberContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavoriteMemberContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteMemberContextProvider>,
  document.getElementById("root")
);
