import React from "react";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

// Shimmer Menu card to display with animation
export const MenuShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate"></div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <div className="shimmer-w40 stroke animate"></div>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            {Array(4)
              .fill("")
              .map((element, index) => (
                <div className="shimmer-menu-card" key={index}>
                  <div className="shimmer-item-details">
                    <div className="shimmer-w40  stroke animate"></div>
                    <p className="shimmer-w20  stroke animate"> </p>
                  </div>
                  <div className="shimmer-img-wrapper">
                    <img className="shimmer-img stroke animate" alt="" />
                    <div className="shimmer-btn stroke animate"> </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//shimmer component
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(15)
        .fill(" ")
        .map((element, index) => {
          return <CardShimmer key={index} />;
        })}
    </div>
  );
};
export default Shimmer;
