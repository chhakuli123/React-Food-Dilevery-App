import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { restaurantList } from "../Components/config";

function Body() {
  function filterData(searchText, restaurents) {
    const filterData = restaurents.filter((restaurent) =>
      restaurent.data.name.includes(searchText)
    );
    return filterData;
  }
  const [restaurents, setRestaurents] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search a restaurent"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(searchText, restaurents);
          setRestaurents(data);
        }}
      >
        Search
      </button>
      <div className="restaurant-list">
        {restaurantList.map((restaurent) => {
          return (
            <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
          );
        })}
      </div>
    </>
  );
}

export default Body;
