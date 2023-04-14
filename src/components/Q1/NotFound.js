import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1 style={{ margin: "5rem" }}>404 Page Not Found</h1>
      <NavLink
        style={{
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          backgroundColor: "black",
          padding: "0.9rem"
        }}
        to="/"
      >
        Return To Home
      </NavLink>
    </div>
  );
};
