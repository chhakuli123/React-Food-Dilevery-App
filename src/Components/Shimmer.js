import React from "react";
import shimmer from "../assets/shimmer.png";
function Shimmer() {
  return (
    <div>
      <div className="shimmer-restaurant-list">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div className="shimmer-card" key={index}>
              <img alt="" src={shimmer} />
              <h2>Restaurant Name</h2>
              <h3>Cuisines</h3>
              <h4>Distance</h4>
            </div>
          ))}
        ;
      </div>
    </div>
  );
}

export default Shimmer;
