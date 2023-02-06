import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";

function RestaurentMenu() {
  // how to read a dynamic URL params
  const { id } = useParams();

  //this is custom hook
  const restaurent = useRestaurentMenu(id);

  return !restaurent ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center">
      <div className="w-88 h-88 p-2 m-6 rounded-md shadow-2xl  hover:shadow-lg">
        <img
          className="rounded-md shadow-md"
          src={IMG_CDN_URL + restaurent?.cloudinaryImageId}
          alt=""
        />
        <h1 className="text-2xl font-bold">{restaurent?.name}</h1>
        <h1 className="font-bold">Restraunt id: {id}</h1>
        <h3 className="font-bold">
          {restaurent?.area},{restaurent?.city}
        </h3>
        <h3 className="font-bold">{restaurent?.avgRating} stars</h3>
        <h3 className="font-bold">{restaurent?.costForTwoMsg}</h3>
      </div>
      <div className="w-80 p-2 m-3   rounded-md shadow-2xl  hover:shadow-lg ">
        <h1 className="text-2xl font-bold">Menu</h1>
        <ul>
          {Object.values(restaurent?.menu?.items).map((item) => (
            <li className="text-lg" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurentMenu;
