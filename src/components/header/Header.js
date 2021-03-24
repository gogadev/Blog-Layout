import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./header.style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="list">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/all-posts" className="link">
          <li>All Posts</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
