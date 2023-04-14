import { useContext } from "react";
import { WishlistContext } from "./context/wishlistContext";

const WishList = () => {
  const { wishlist, removeFromWishlistHandler, moveToCartHandler } = useContext(
    WishlistContext
  );

  console.log(wishlist);
  const btnStyle = {
    color: "white",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "black",
    padding: "1rem",
    margin: "12px",
    cursor: "pointer"
  };
  return (
    <>
      {!wishlist.length && <h3>You haven't added anything to the Wishlist</h3>}
      {wishlist.map((el, i) => {
        const { id, name, description, price, quantity, category, brand } = el;
        return (
          <div
            style={{
              minWidth: "450px",
              border: "2px dotted",
              margin: "2rem",
              borderRadius: "12px"
            }}
            key={i}
          >
            <h1>{name}</h1>
            <p>{description}</p>
            <p>
              <i>
                {brand} <span>{category}</span>
              </i>
            </p>
            <p style={{ fontWeight: "600" }}>
              INR {price} <span>x{quantity}</span>
              <button
                onClick={() => removeFromWishlistHandler(id)}
                style={btnStyle}
              >
                Remove From Wishlist
              </button>
              <button
                onClick={() => moveToCartHandler(el, id)}
                style={btnStyle}
              >
                Move to Cart
              </button>
            </p>
          </div>
        );
      })}
    </>
  );
};
export default WishList;
