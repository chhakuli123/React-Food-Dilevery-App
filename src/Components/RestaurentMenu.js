import React from "react";
import { useParams } from "react-router-dom";

function RestaurentMenu() {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>This is Restaurent</h1>
      <h3>Restaurent id:{id} </h3>
    </div>
  );
}

export default RestaurentMenu;
