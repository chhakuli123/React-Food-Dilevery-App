import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
// import { restaurantList } from "../Components/config";

function Body() {
  //function to search a restaurent from list,here we are getting all restaurent names
  function filterData(searchText, restaurents) {
    const filterData = restaurents.filter((restaurent) =>
      restaurent?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
  }

  //usestate variable
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffecthook
  useEffect(() => {
    getRestaurent();
    // fetchData();
  }, []);

  //tried with fetch method
  // const fetchData = () => {
  //   try {
  //     fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //     )
  //       .then((res) => res.json())
  //       .then((praj) => {
  //         // console.log(data);
  //         // console.log(data?.cards[2]?.data?.data?.cards);
  //         setRestaurents(praj.data?.cards[2]?.data?.data?.cards);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //function to fetch the data
  async function getRestaurent() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    let praj = await data.json();
    setAllRestaurents(praj?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(praj?.data?.cards[2]?.data?.data?.cards);
  }

  //we have to put shimmer ui for great user experience
  //if  restaurent is empty =>then load shimmer ui
  //otherwise load api
  // if (filteredRestaurents?.length === 0)
  //   return <h2>Soory no restaurent found...</h2>;
  return allRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
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
          const data = filterData(searchText, allRestaurents);
          setFilteredRestaurents(data);
        }}
      >
        Search
      </button>

      {/* we are mapping the every restauraent to erender */}
      <div className="restaurant-list">
        {filteredRestaurents.map((restaurent) => {
          return (
            <RestaurentCard {...restaurent.data} key={restaurent.data.id} />
          );
        })}
      </div>
    </>
  );
}

export default Body;
