import React, { useState } from "react";

import logo from "../assets/logo.png";
function Header() {
  const [loggedIn, setLoggedIn] = useState("true");
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact </li>
          <li>Cart</li>
          {loggedIn === "true" ? (
            <li>
              <button onClick={() => setLoggedIn("false")}>Log Out</button>
            </li>
          ) : (
            <li>
              <button onClick={() => setLoggedIn("true")}>Log In</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
