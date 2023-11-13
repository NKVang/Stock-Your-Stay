import React from "react";
import "./shop_style.css";
import Filter from "./Filter.js";
import LocalFavs from "./LocalFavs.js";
import LastStay from "./LastStay.js";
import Recommended from "./Recommended.js";

function Gallery() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-auto">
          <Filter />
        </div>
        <div className="col">
          <div className="row">
            <LocalFavs />
          </div>
          <div className="row">
            <LastStay />
          </div>
          <div className="row">
            <Recommended />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
