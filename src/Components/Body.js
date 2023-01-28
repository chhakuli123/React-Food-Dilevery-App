import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { restaurantList } from "../Components/config";

function Body() {
  //function to search a restaurent from list
  function filterData(searchText, restaurents) {
    const filterData = restaurents.filter((restaurent) =>
      restaurent.data.name.includes(searchText)
    );
    return filterData;
  }

  //usestate variable
  const [restaurents, setRestaurents] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  // useEffecthook
  useEffect(() => {
    getRestaurent();
  }, []);
  //function to fetch the data
  async function getRestaurent() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setRestaurents(json?.data?.cards[2].data?.data?.cards);
  }
  return (
    <>
      {/* //search functionality */}
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

      {/* we are mapping the every restauraent to erender */}
      <div className="restaurant-list">
        {restaurents.map((restaurent) => {
          return (
            <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
          );
        })}
      </div>
    </>
  );
}

export default Body;
