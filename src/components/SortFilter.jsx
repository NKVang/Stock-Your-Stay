import React from "react";

const SortFilter = () => {
  return (
    <div className="caret-dropdown">
      <div>
        <span>Filter</span>
        <div className="filter">
          <select>
            <option>All</option>
            <option>Location</option>
            <option>Beverages</option>
            <option>Water</option>
          </select>
        </div>
      </div>
      <div>
        <span>Sort</span>
        <div className="sort">
          <select>
            <option>Best Selling</option>
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, Z-A</option>
            <option>Price, Low to High</option>
            <option>Pirce, High to Low</option>
            <option>Date, Old to New</option>
            <option>Date, New to Old</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortFilter;
