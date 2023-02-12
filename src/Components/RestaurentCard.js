import React from "react";
import { IMG_CDN_URL } from "../Components/config";

// Restaurant card component
function RestaurentCard({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) {
  return (
    <div className=" w-80 p-3 m-3 rounded-md shadow-2xl hover:shadow-lg  ">
      <img
        className="rounded-md shadow-md"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h2 className=" font-bold text-2xl"> {name}</h2>
      <h3 className=" font-semibold">{cuisines.join(", ")} </h3>
      <h5>{area}</h5>

      <span className="flex justify-between mt-4">
        <h4
          className="bg-green-700	rounded-md p-1 w-14"
          style={
            avgRating < 4
              ? { backgroundColor: "red" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          <span className="ml-1">{avgRating}</span>
        </h4>
        <h4 className="text-l font-semibold py-1">• {lastMileTravelString}</h4>
        <h4 className="text-l font-semibold py-1 ">• {costForTwoString}</h4>
      </span>
    </div>
  );
}

export default RestaurentCard;
