import React from "react";
import shimmer from "../assets/shimmer.png";
function Shimmer() {
  return (
    <div className=" flex flex-wrap ml-16  ">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            className="w-80 p-2 m-3 rounded-md shadow-2xl hover:shadow-lg"
            key={index}
          >
            <img className="rounded-md shadow-md" alt="" src={shimmer} />
            <h2>Restaurant Name</h2>
            <h3>Cuisines</h3>
            <h4>Distance</h4>
          </div>
        ))}
      ;
    </div>
  );
}

export default Shimmer;
