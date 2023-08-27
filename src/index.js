import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";
import { makeServer } from "./server";
import {
  AuthContextProvider,
  BlogContextProvider,
  CartContextProvider,
  ProductsContextProvider,
  WishlistContextProvider,
} from "./contexts";
import AboutContextProvider from "./contexts/aboutContext/AboutContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <AboutContextProvider>
              <BlogContextProvider>
              <Router>
                <App />
              </Router>
              </BlogContextProvider>
            </AboutContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
