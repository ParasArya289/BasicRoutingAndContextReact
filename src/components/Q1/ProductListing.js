import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataBaseContext } from "../data/db";
import { CartContext } from "./context/cartContext";
import { WishlistContext } from "./context/wishlistContext";
const ProductListing = () => {
  const { data } = useContext(DataBaseContext);
  const { addToCartHandler } = useContext(CartContext);
  const { addToWishlistHandler } = useContext(WishlistContext);
  return (
    <>
      {data.map((el) => {
        const { id, name, description, price } = el;

        return (
          <div
            key={id}
            style={{
              minWidth: "450px",
              border: "2px dotted",
              margin: "2rem",
              borderRadius: "12px"
            }}
          >
            <h1>{name}</h1>
            <p>{description}</p>
            <p>INR.{price}</p>
            <Link
              style={{
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
                backgroundColor: "black",
                padding: "0.9rem"
              }}
              to={`/product/${id}`}
            >
              View
            </Link>
            <button
              onClick={() => addToCartHandler(el)}
              style={{
                color: "white",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "black",
                padding: "1rem",
                margin: "12px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlistHandler(el)}
              style={{
                color: "white",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "black",
                padding: "1rem",
                cursor: "pointer"
              }}
            >
              Add to Wishlist
            </button>
          </div>
        );
      })}
    </>
  );
};
export default ProductListing;
