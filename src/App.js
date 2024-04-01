import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LocationStay from "./components/LocationStay";
import CheckReservation from "./components/CheckReservation";
import Shop from "./pages/shop/Shop.jsx";
import ViewAll from "./pages/shop/ViewAll.jsx"
import Inventory from "./pages/employees/Inventory.jsx";
import Layout from "./pages/employees/Layout.jsx";
import Orders from "./pages/employees/Orders.jsx";
import Rooms from "./pages/employees/Rooms.jsx";
import Customers from "./pages/employees/Customers.jsx";
import Analytics from "./pages/employees/Analytics.jsx";
import Signup from "./components/Signup.js";
import "./components/shop_style.css";
import Login from "./pages/login/Customer_Login.js";
import Product from "./pages/shop/IndividualItemPage.jsx";
import Payment from "./components/Payment.js";
import OrderHistory from "./components/OrderHistory.js";
import OrderDetails from "./components/OrderDetails.js";
import Settings from "./components/Settings.js";
import CheckoutSuccess from "./components/CheckoutSuccess.jsx";
import SubCategory from "./pages/shop/SubCategory.jsx";
import ProductPage from "./components/IndividualItemPage";

const App = () => {
  const [cartQuantity, setCartQuantity] = useState("");
  const [historyItems, setHistoryItems] = useState("");

  const getCartQuantity = (quantity) => {
    setCartQuantity(quantity);
  };

  const getHistoryItems = (items) => {
    setHistoryItems(items);
  };

  return (
    <BrowserRouter>
      {window.location.pathname.split("/")[1] !== "employee" && (
        <Header getCartQuantity={cartQuantity} />
      )}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/shop" element={<Shop />}></Route>
        <Route
          exact
          path="/shop/product/:recordId"
          element={<Product />}
        ></Route>
        <Route exact path="/location-stay" element={<LocationStay />}></Route>
        <Route
          exact
          path="/reservations"
          element={<CheckReservation />}
        ></Route>
        <Route exact path="/view-all" element={<ViewAll />}></Route>
        <Route exact path="/sub-category/:categoryName" element={<SubCategory />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/settings" element={<Settings />}></Route>
        <Route
          exact
          path="/shopping-cart"
          element={
            <Cart
              sendCartQuantity={getCartQuantity}
              getHistoryItems={getHistoryItems}
            />
          }
        ></Route>
        <Route
          exact
          path="/payment"
          element={<Payment purchasedItems={historyItems} />}
        ></Route>
        <Route
          exact
          path="/order-histories"
          element={<OrderHistory historyItems={historyItems} />}
        ></Route>
        <Route
          exact
          path="/order-history/:orderId"
          element={<OrderDetails historyItems={historyItems} />}
        ></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/employee" element={<Layout />}>
          <Route exact index element={<Orders />} />
          <Route exact path="inventory" element={<Inventory />} />
          <Route exact path="rooms" element={<Rooms />} />
          <Route exact path="customers" element={<Customers />} />
          <Route exact path="analytics" element={<Analytics />} />
        </Route>
        <Route exact path="/pp" element={<ProductPage />} />
        <Route exact path="/checkout-success" element={<CheckoutSuccess />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
