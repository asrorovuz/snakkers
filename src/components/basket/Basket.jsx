import React from "react";
import "./Basket.css";
import classNames from "classnames";

const Basket = ({ basket, hideBasket }) => {

    

  return (
    <div className={classNames(basket ? "wrapper d-block" : "wrapper")} onClick={(e) => hideBasket(e)}>
      <div className="basket">
        <h2>Корзина</h2>
        <div className="product d-flex">
          <div className="product-cards d-flex">
            <div className="product-card d-flex">
              <div className="card-img"></div>
              <div className="card-info">
                <div className="card-title">
                  Мужские Кроссовки Nike Air Max 270
                </div>
                <div className="card-price">12 999 руб.</div>
              </div>
              <div className="delete">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    fill="white"
                    stroke="#DBDBDB"
                  />
                  <path
                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                    fill="#B5B5B5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="info d-flex">
            <p className="d-flex">
              Итого: <span>21 498 руб. </span>
            </p>
            <p className="d-flex">
              Налог 5%: : <span>1074 руб. </span>
            </p>
            <button>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
