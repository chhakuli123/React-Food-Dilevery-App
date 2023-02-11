import React from "react";
import RestroMenuDish from "../assets/menu.png";

function About() {
  return (
    <div className="mt-8 ">
      <img
        className="content-center h-[23rem] w-[28rem] ml-[33rem]"
        src={RestroMenuDish}
        alt=""
      />
      <h1 className="text-center font-extrabold text-3xl mb-4 mt-4">
        Welcome Hungry peoples in the
      </h1>
      <h1 className="font-extrabold text-center text-5xl text-red-500">
        HUNGRAZY
      </h1>
      <p className="text-center font-extrabold text-3xl mb-10 mt-4">
        Which is a food-delivery company, delivers food to a customer with love.
      </p>
    </div>
  );
}
export default About;
