import React from "react";

import logo from "../assets/logo.png";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
