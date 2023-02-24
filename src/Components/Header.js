import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  //we are subscribing the store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      className="flex  justify-evenly p-2 sticky top-0 bg-white"
      style={{ boxShadow: "0 2px 14px #888484" }}
    >
      <img src={logo} alt="" className="h-20" />
      <div>
        <ul className="flex  mt-6 text-black text-xl">
          <div className="flex mr-[36rem] space-x-4">
            <li className="px-2 hover:text-orange-400">
              <Link to="/">Home</Link>
            </li>

            <li className="px-2 hover:text-orange-400">
              <Link to="/about">About </Link>
            </li>

            <li className="px-2 hover:text-orange-400">
              <Link to="/contact">Contact </Link>
            </li>
          </div>
          <li className="mt-2 mr-6 hover:text-orange-400">
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
              {cartItems.length}
            </Link>
          </li>
          {loggedIn === "true" ? (
            <li>
              <button
                className="bg-black rounded-md p-2 text-white font-bold hover:text-orange-400"
                onClick={() => setLoggedIn("false")}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="bg-black rounded-md p-2 text-white font-bold hover:text-orange-400"
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
