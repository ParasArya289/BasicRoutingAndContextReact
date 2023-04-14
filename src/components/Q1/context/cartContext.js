import { createContext, useContext, useState } from "react";
import { WishlistContext } from "../../../index";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const wishlist = useContext(WishlistContext);
  console.log(wishlist?.addToWishListHandler);
  const [cart, setCart] = useState([]);
  const addToCartHandler = (item) => {
    setCart((cart) => [...cart, item]);
  };
  const removeFromCartHandler = (ID) =>
    setCart([...cart].filter(({ id }) => id !== ID));
  const moveToWishListHandler = (item, ID) => {
    wishlist?.addToWishListHandler(item);
    removeFromCartHandler(ID);
  };
  const cartValue = cart?.reduce(
    (acc, { price, quantity }) => ({
      price: acc.price + price * quantity,
      quantity: acc.quantity + quantity
    }),
    { price: 0, quantity: 0 }
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartHandler,
        removeFromCartHandler,
        moveToWishListHandler,
        cartValue
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
