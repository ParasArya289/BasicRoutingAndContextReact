import { createContext, useContext, useState } from "react";
import { CartContext } from "./cartContext";

export const WishlistContext = createContext();
export const WishlistContextProvider = ({ children }) => {
  const { addToCartHandler } = useContext(CartContext);
  const [wishlist, setWishlist] = useState([]);
  const addToWishlistHandler = (item) => {
    setWishlist((wishlist) => [...wishlist, item]);
  };
  const removeFromWishlistHandler = (ID) =>
    setWishlist([...wishlist].filter(({ id }) => id !== ID));

  const moveToCartHandler = (item, ID) => {
    addToCartHandler(item);
    removeFromWishlistHandler(ID);
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlistHandler,
        removeFromWishlistHandler,
        moveToCartHandler
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
