import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import sorryNotFound from "../assets/notfound.png";
import { RESTRO_URL } from "../Components/config";
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
  const [errorMessage, setErrorMessage] = useState("");

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
    let data = await fetch(RESTRO_URL);
    let praj = await data.json();
    setAllRestaurents(praj?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(praj?.data?.cards[2]?.data?.data?.cards);
    console.log(praj?.data?.cards[2]?.data?.data?.cards);
  }

  //hook for user is offline
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <span className="font-bold text-center text-red-600">
        Failed to load, Please check your internet connection
      </span>
    );
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurents(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurents(restaurants);
    }
  };
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
      <div className=" flex justify-center p-4 bg-gray">
        <input
          type="text"
          className="mx-3 p-1 px-2 w-96 h-11 border rounded-lg  border-gray-400 "
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" p-1 px-2 w-12 bg-gray-700 text-white rounded-md"
          onClick={() => {
            // const data = filterData(searchText, allRestaurents);
            // setFilteredRestaurents(data);
            // user click on button searchData function is called
            searchData(searchText, allRestaurents);
          }}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {errorMessage && (
        <div className="flex flex-col justify-center items-center text-4xl font-bold">
          <img className="h-80 w-80" src={sorryNotFound} alt="" />
          {errorMessage}
        </div>
      )}

      {/* we are mapping the every restauraent to erender */}
      <div className="flex flex-wrap ml-12">
        {filteredRestaurents.map((restaurent) => {
          return (
            <Link
              to={"/restaurent/" + restaurent.data.id}
              key={restaurent.data.id}
            >
              <RestaurentCard {...restaurent.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Body;
