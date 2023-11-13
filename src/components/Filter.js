import React from "react";
import "./shop_style.css";

function Filter() {
  return (
    <>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="vegetables"
          />
          <label className="form-check-label" htmlFor="vegetables">
            Vegetables
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="meats"
          />
          <label className="form-check-label" htmlFor="meats">
            Meats
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="spices"
          />
          <label className="form-check-label" htmlFor="spices">
            Spices
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="drinks"
          />
          <label className="form-check-label" htmlFor="drinks">
            Drinks
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="fruits"
          />
          <label className="form-check-label" htmlFor="fruits">
            Fruits
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="dessert"
          />
          <label className="form-check-label" htmlFor="dessert">
            Dessert
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="frozen-foods"
          />
          <label className="form-check-label" htmlFor="frozen-foods">
            Frozen Foods
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="bread"
          />
          <label className="form-check-label" htmlFor="bread">
            Bread
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="quick-lunch"
          />
          <label className="form-check-label" htmlFor="quick-lunch">
            Quick Lunch
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="breakfast-for-lunch"
          />
          <label className="form-check-label" htmlFor="breakfast-for-lunch">
            Breakfast for Lunch
          </label>
        </div>
      </div>
      <div className="row row-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="pastas"
          />
          <label className="form-check-label" htmlFor="pastas">
            Pastas
          </label>
        </div>
      </div>
    </>
  );
}

export default Filter;
