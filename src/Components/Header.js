import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
function Header() {
  const [loggedIn, setLoggedIn] = useState("true");
  return (
    <div className="flex justify-between">
      <img src={logo} alt="" className="h-36" />
      <div>
        <ul className="flex py-6 px-6 mt-8 text-black text-xl">
          <li className="px-2 hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2 hover:text-orange-400">
            <Link to="/about">About </Link>
          </li>

          <li className="px-2 hover:text-orange-400">
            {" "}
            <Link to="/contact">Contact </Link>
          </li>
          <li className="px-2 hover:text-orange-400">Cart</li>
          {loggedIn === "true" ? (
            <li>
              <button
                className="px-2 hover:text-orange-400"
                onClick={() => setLoggedIn("false")}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="px-2 hover:text-orange-400"
                onClick={() => setLoggedIn("true")}
              >
                Log In
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
