import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "../src/store/Context.jsx";
import CartContextProvider from "./store/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
