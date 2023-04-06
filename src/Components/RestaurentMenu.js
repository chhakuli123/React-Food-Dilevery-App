import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, removeItem } from "../Redux_Store/cartSlice";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { IMG_CDN_URL, MENU_IMG_CDN_URL } from "./config";
import { MenuShimmer } from "./Shimmer";

function RestaurentMenu() {
  // call useParams and get value of restaurent id using object destructuring
  const { id } = useParams();

  //this is custom hook
  const restaurent = useRestaurentMenu(id);

  //This is hook for dispatch the action
  const dispatch = useDispatch();

  //function to handel items on click of add button
  const handelAddItems = (item) => {
    dispatch(addItem(item));
  };
  //function to handel items on click of remove button
  const handelRemoveItems = () => {
    dispatch(removeItem());
  };

  return !restaurent ? (
    <MenuShimmer />
  ) : (
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
          <div className="menu-items-list mt-4">
            {Object.values(restaurent?.menu?.items).map((item) => (
              <div
                className="menu-item flex justify-between h-[14rem] mb-4 p-4 w-[60rem] rounded-2xl border-[2.5px]"
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
                      alt=""
                    />
                  )}
                  <button
                    className="add-btn mt-2 ml-2 rounded-md text-white p-2 bg-red-500 "
                    onClick={() => handelAddItems(item)}
                  >
                    ADD +
                  </button>
                  <button
                    className="add-btn mt-2  ml-6 rounded-md text-white p-2 bg-red-500 "
                    onClick={() => handelRemoveItems()}
                  >
                    - Remove
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
