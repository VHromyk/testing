import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" data-testid="main-link">
        Main page
      </Link>
      <Link to="/about" data-testid="about-link">
        About page
      </Link>
      <Link to="/users" data-testid="users-link">
        Users page
      </Link>
    </nav>
  );
};

export default NavBar;
