import { useContext } from "react";
import { CartContext } from "./context/cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const {
    removeFromCartHandler,
    moveToWishListHandler,
    cartValue
  } = useContext(CartContext);
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
      {!cart.length && <h3>You haven't added anything to the cart</h3>}
      {cart.length > 0 && (
        <h4>
          Total Cart Price ₹{cartValue.price} for {cartValue.quantity} items
        </h4>
      )}
      {cart.map((el, i) => {
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
                onClick={() => removeFromCartHandler(id)}
                style={btnStyle}
              >
                Remove From Cart
              </button>
              <button
                disabled
                onClick={() => moveToWishListHandler(el, id)}
                style={btnStyle}
              >
                Move to Wishlist
              </button>
            </p>
          </div>
        );
      })}
    </>
  );
};
export default Cart;
