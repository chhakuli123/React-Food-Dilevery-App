import React from "react";
import { IMG_CDN_URL } from "../Components/config";

// Restaurant card component
function FoodItem({ cloudinaryImageId, name, description, price, avgRating }) {
  return (
    <div className=" w-80 p-3 m-3 rounded-md shadow-2xl hover:shadow-lg  ">
      <img
        className="rounded-md shadow-md"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h2 className=" font-bold text-2xl mt-4"> {name}</h2>
      <h2 className=" font-bold m-3"> {description}</h2>

      <span className="font-bold text-2xl">Rs {price / 100}</span>
    </div>
  );
}

export default FoodItem;
