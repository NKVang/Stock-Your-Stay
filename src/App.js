import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import LocationStay from "./components/LocationStay";
import ViewAll from "./components/ViewAllPage/ViewAll"
import SubCategory from "./components/SubCategory";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/location-stay">Location Stay</Link>
          </li>
          <li>
            <Link to="/view-all">view all</Link>
          </li>
          <li>
            <Link to="/sub-category">Sub-Category</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/location-stay" element={<LocationStay />}></Route>
          <Route exact path="/view-all" element={<ViewAll />}></Route>
          <Route exact path="/sub-category" element={<SubCategory />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
