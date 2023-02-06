import React from "react";
import { IMG_CDN_URL } from "../Components/config";

function RestaurentCard({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) {
  return (
    <div className="w-80 p-2 m-3 rounded-md shadow-2xl hover:shadow-lg  ">
      <img
        className="rounded-md shadow-md"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h2 className="text-2xl font-semibold py-1"> {name}</h2>
      <h3 className="text-xl font-semibold py-1">{cuisines.join(", ")} </h3>
      <h4 className="text-l font-semibold py-1">{lastMileTravelString}</h4>
    </div>
  );
}

export default RestaurentCard;
