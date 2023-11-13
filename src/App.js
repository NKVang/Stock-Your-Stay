import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";

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
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
