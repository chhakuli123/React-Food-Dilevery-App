import React from "react";
import RestaurentCard from "./RestaurentCard";
import { restaurantList } from "../Components/config";

function Body() {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurent) => {
        return <RestaurentCard {...restaurent.data} />;
      })}
    </div>
  );
}

export default Body;
