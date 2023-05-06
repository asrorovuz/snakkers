import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BuyProduct from "../../pages/BuyProduct";
import LikeProduct from "../../pages/LikeProduct";
import Header from "../header/Header";

import "./App.css";

export const App = () => {
  const [basket, setBasket] = useState(false);

  const showBasket = () => {
    setBasket(!basket);
  };

  return (
    <div className="App container">
      <Routes>
        <Route element={<Header showBasket={showBasket} />}>
          <Route
            path="/"
            element={<HomePage basket={basket} setBasket={setBasket} />}
          />
          <Route path="/like" element={<LikeProduct />} />
          <Route path="/buy" element={<BuyProduct />} />
        </Route>
      </Routes>
    </div>
  );
};
