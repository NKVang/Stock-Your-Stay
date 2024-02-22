import React from "react";
import "./CategoryButtons.css";
import { Link } from "react-router-dom";

/* These are the category buttons at the top center that will be on pretty much every page */
const CategoryButtons = () => {
  return (
    <Link to={"#"}>
      <div className='buttons'>
        <div className='breakfastButton'>
          <button>Breakfast</button>
        </div>
        <div className='snacksButton'>
          <button>Snacks</button>
        </div>
        <div className='lunchButton'>
          <button>Lunch</button>
        </div>
        <div className='dinnerButton'>
          <button>Dinner</button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryButtons;