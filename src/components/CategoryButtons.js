import React from "react";
import "./CategoryButtons.css";

/* These are the category buttons at the top center that will be on pretty much every page */
const CategoryButtons = () =>{
    return (
      <a href = "">
        <div className = 'buttons'>
          <div className = 'breakfastButton'>
            <button>Breakfast</button>
          </div>
          <div className = 'snacksButton'>
            <button>Snacks</button>
          </div>
          <div className = 'lunchButton'>
            <button>Lunch</button>
          </div>  
          <div className = 'dinnerButton'>
            <button>Dinner</button>
          </div>
      </div>
      </a>
    );
};
  
export default CategoryButtons;