import "./styles.css";

import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import ProductListing from "./components/Q1/ProductListing";
import Cart from "./components/Q1/Cart";
import Product from "./components/Q1/Product";
import WishList from "./components/Q1/WishList";
import { NotFound } from "./components/Q1/NotFound";

export default function App() {
  const navStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline 3px" : "none",
      textUnderlineOffset: isActive ? "20px" : "none",
      color: isActive ? "grey" : "white",
      padding: "6px"
    };
  };
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "6px"
        }}
      >
        <NavLink style={navStyle} to="/">
          Home
        </NavLink>
        <NavLink style={navStyle} to="/cart">
          Cart
        </NavLink>
        <NavLink style={navStyle} to="/wishlist">
          Wishlist
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
