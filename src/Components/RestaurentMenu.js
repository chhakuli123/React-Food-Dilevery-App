import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { IMG_CDN_URL, MENU_IMG_CDN_URL } from "./config";
import { MenuShimmer } from "./Shimmer";
import RestroMenuDish from "../assets/RestroMenuDish.jpg";

function RestaurentMenu() {
  // call useParams and get value of restaurent id using object destructuring
  const { id } = useParams();

  //this is custom hook
  const restaurent = useRestaurentMenu(id);

  return !restaurent ? (
    <MenuShimmer />
  ) : (
    // <div className="flex justify-center">
    //   <div className="w-88 h-88 p-2 m-6 rounded-md shadow-2xl  hover:shadow-lg">
    //     <img
    //       className="rounded-md shadow-md"
    //       src={IMG_CDN_URL + restaurent?.cloudinaryImageId}
    //       alt={restaurent?.name}
    //     />
    //     <h1 className="text-2xl font-bold">{restaurent?.name}</h1>
    //     <h1 className="font-bold">Restraunt id: {id}</h1>
    //     <h3 className="font-bold">
    //       {restaurent?.area},{restaurent?.city}
    //     </h3>
    //     <h3 className="font-bold">{restaurent?.avgRating} stars</h3>
    //     <h3 className="font-bold">{restaurent?.costForTwoMsg}</h3>
    //   </div>
    //   <div className="w-80 p-2 m-3   rounded-md shadow-2xl  hover:shadow-lg ">
    //     <h1 className="text-2xl font-bold">Menu</h1>
    //     <ul>
    //       {Object.values(restaurent?.menu?.items).map((item) => (
    //         <li className="text-lg" key={item.id}>
    //           {item.name}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className="restaurent-menu">
      <div className="restaurent-summary flex justify-center bg-black h-[15rem] w-[84rem] ml-24 rounded-2xl">
        <img
          className="restaurent-img rounded-md p-3 h-[15rem] w-[20rem]"
          src={IMG_CDN_URL + restaurent?.cloudinaryImageId}
          alt={restaurent?.name}
        />
        <div className="restaurent-summary-details ml-4">
          <h2 className="restaurent-title text-white text-[3rem] font-bold ">
            {restaurent?.name}
          </h2>
          <p className="restaurent-tags text-slate-300 text-[1.5rem] font-bold ">
            {restaurent?.cuisines.join(", ")}
          </p>
          <div className="restaurent-details flex mt-20 ">
            <div
              className="restaurent-rating bg-green-900 p-1 rounded-md	"
              style={
                restaurent?.avgRating < 4
                  ? { backgroundColor: "red" }
                  : restaurent?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span className="ml-1">{restaurent?.avgRating}</span>
            </div>
            <div className="text-slate-300 ml-4">|</div>
            <div className="text-slate-300 font-bold ml-4">
              {restaurent?.sla.slaString}
            </div>
            <div className="text-slate-300 ml-4">|</div>
            <div className="text-slate-300 font-bold ml-4">
              {restaurent?.costForTwoMsg}
            </div>
          </div>
        </div>
      </div>

      <div className="restaurent-menu-content">
        <div className="menu-items-container  ml-32 mt-8">
          <div className="menu-title-wrap">
            <h3 className="menu-title text-black font-bold text-2xl">
              Recommended
            </h3>
            <p className="menu-count text-slate-500 mt-2  ">
              {Object.keys(restaurent?.menu?.items).length} ITEMS
            </p>
          </div>
          <div className="menu-items-list mt-4">
            {Object.values(restaurent?.menu?.items).map((item) => (
              <div
                className="menu-item flex justify-between h-[14rem] mb-4 p-4 w-[76rem] rounded-2xl bg-red-100"
                key={item?.id}
              >
                <div className="menu-item-details">
                  <h3 className="item-title text-black font-bold text-2xl  ">
                    {item?.name}
                  </h3>
                  <p className="item-cost text-slate-900">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc font-bold text-md">
                    {item?.description}
                  </p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.cloudinaryImageId && (
                    <img
                      className="menu-item-img   h-[9rem] w-48 rounded-md "
                      src={MENU_IMG_CDN_URL + item?.cloudinaryImageId}
                      alt={RestroMenuDish}
                    />
                  )}
                  <button className="add-btn mt-2 rounded-md text-white p-2 bg-red-500 ">
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurentMenu;
