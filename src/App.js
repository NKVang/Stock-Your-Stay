import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import LocationStay from "./components/LocationStay";
import ViewAll from "./components/ViewAllPage/ViewAll";
import SubCategory from "./components/SubCategory";
import Cart from "./components/Cart";

const App = () => {
  const [cartQuantity, setCartQuantity] = useState("");

  const getCartQuantity = (quantity) => {
    setCartQuantity(quantity);
  };

  return (
    <BrowserRouter>
      <Header getCartQuantity={cartQuantity} />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route exact path="/location-stay" element={<LocationStay />}></Route>
        <Route exact path="/view-all" element={<ViewAll />}></Route>
        <Route exact path="/sub-category" element={<SubCategory />}></Route>
        <Route
          exact
          path="/shopping-cart"
          element={<Cart sendCartQuantity={getCartQuantity} />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
