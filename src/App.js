import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddReservation from "./pages/reservation/AddReservation.js";
import Shop from "./pages/shop/Shop.jsx";
import Inventory from "./pages/employees/Inventory.jsx";
import Layout from "./pages/employees/Layout.jsx";
import Orders from "./pages/employees/Orders.jsx";
import Rooms from "./pages/employees/Rooms.jsx";
import Customers from "./pages/employees/Customers.jsx";
import Analytics from "./pages/employees/Analytics.jsx";
import "./components/shop_style.css";
import Login from "./pages/login/Customer_Login.js";
import Product from "./pages/shop/IndividualItemPage.jsx";
import Payment from "./components/Payment.js";
import CheckoutSuccess from "./components/CheckoutSuccess.jsx";
import SubCategory from "./pages/shop/SubCategory.jsx";
import Reservations from "./pages/reservation/ReservationPage.js";
import PrivateRoutes from "./PrivateRoutes.js";

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

        <Route element = {<PrivateRoutes />}>
          <Route exact path="/Add-Reservation" element={<AddReservation />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/shop/product/:recordId" element={<Product />}></Route>
          <Route exact path="/reservations" element={<Reservations />}></Route>
          <Route exact path="/sub-category/:categoryName" element={<SubCategory />}></Route>
          <Route exact path="/shopping-cart" element={ <Cart sendCartQuantity={getCartQuantity} getHistoryItems={getHistoryItems}/>}></Route>
          <Route exact path="/payment" element={<Payment purchasedItems={historyItems} />}></Route>
          <Route exact path="/checkout-success" element={<CheckoutSuccess />} />
        </Route>
        
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        
        <Route path="/employee" element={<Layout />}>
          <Route exact index element={<Orders />} />
          <Route exact path="inventory" element={<Inventory />} />
          <Route exact path="rooms" element={<Rooms />} />
          <Route exact path="customers" element={<Customers />} />
          <Route exact path="analytics" element={<Analytics />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
