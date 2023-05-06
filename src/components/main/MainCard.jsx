import React from "react";
import "./MainCard.css";
import searchIcon from "../../assistant/search.png";
import Like from '../../assistant/like.png';
import LightLike from '../../assistant/light-like.png';
import { useState } from "react";
import boots from '../../assistant/shoose/1.png'
import boots2 from '../../assistant/shoose/2.png'

const MainCard = () => {
    const [like, setLike] = useState(false)

    const changeLike = () => {
        setLike(!like)
    }

  return (
    <>
      <div className="d-flex card-header">
        <h2>Все кроссовки</h2>
        <div className="d-flex search-block">
          <label htmlFor="search">
            <img src={searchIcon} alt="search icon" />
          </label>
          <input type="search" placeholder="Поиск..." id="search"/>
        </div>
      </div>
      <div className="d-flex cards">
        <div className="card">
            <div className="card-like" onClick={changeLike}>
                <img src={like ? Like : LightLike} alt="like icon" />
            </div>
            <div className="card-img">
                <img src={boots} alt="boots img" />
            </div>
        </div>
        <div className="card">
            <div className="card-like" onClick={changeLike}>
                <img src={like ? Like : LightLike} alt="like icon" />
            </div>
            <div className="card-img">
                <img src={boots2} alt="boots img" />
            </div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>

        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </>
  );
};

export default MainCard;
