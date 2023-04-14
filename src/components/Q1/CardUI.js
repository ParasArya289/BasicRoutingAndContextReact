import { useContext } from "react";
import { CartContext } from "./context/cartContext";
import { WishlistContext } from "./context/wishlistContext";

export const Card = ({ data }) => {
  const btnStyle = {
    color: "white",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "black",
    padding: "1rem",
    margin: "12px",
    cursor: "pointer"
  };
  const { addToCartHandler } = useContext(CartContext);
  const { addToWishlistHandler } = useContext(WishlistContext);
  return (
    <div
      style={{
        minWidth: "450px",
        border: "2px dotted",
        margin: "2rem",
        borderRadius: "12px"
      }}
    >
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <p style={{ fontWeight: "600" }}>
        INR {data?.price} <span>x{data?.quantity}</span>
        <button onClick={() => addToCartHandler(data)} style={btnStyle}>
          Add to Cart
        </button>
        <button onClick={() => addToWishlistHandler(data)} style={btnStyle}>
          Add to Wishlist
        </button>
      </p>
    </div>
  );
};
