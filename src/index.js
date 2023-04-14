import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { DataBaseContext, DataBaseProvider } from "./components/data/db";
import {
  CartContext,
  CartContextProvider
} from "./components/Q1/context/cartContext";
import {
  WishlistContext,
  WishlistContextProvider
} from "./components/Q1/context/wishlistContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { DataBaseContext };
export { CartContext };
export { WishlistContext };

root.render(
  <StrictMode>
    <BrowserRouter>
      <DataBaseProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <App />
          </WishlistContextProvider>
        </CartContextProvider>
      </DataBaseProvider>
    </BrowserRouter>
  </StrictMode>
);
