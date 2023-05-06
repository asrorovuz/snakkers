import React from "react";
import Banner from "../components/banner/Banner";
import Basket from "../components/basket/Basket";
import MainCard from "../components/main/MainCard";

const HomePage = ({ basket, setBasket }) => {
  

  const hideBasket = (e) => {
    if (e.target.classList.contains("wrapper")) {
      setBasket(!basket);
    }
  };

  return (
    <>
      <Basket basket={basket} hideBasket={hideBasket} />
      <div className="main container">
        <Banner />
        <MainCard />
      </div>
    </>
  );
};

export default HomePage;
