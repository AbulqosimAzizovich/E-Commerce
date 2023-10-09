import React, { useState } from "react";
import { Select, Space } from "antd";
import Search from "./UI/Icons/Search";
import Like from "./UI/Icons/Like";
import Baket from "./UI/Icons/Baket";
import { NavLink } from "react-router-dom";

const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["English", "Russian", "Uzbek"],
};

const Header = () => {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  return (
    <header>
      <div className="header__top-container">
        <div className="header__top">
          <div className="header__top--title">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <a href="#">ShopNow</a>
          </div>

          <Space wrap className="space__">
            <Select
              style={{
                width: 120,
              }}
              bordered={false}
              value={secondCity}
              onChange={onSecondCityChange}
              options={cities.map((city) => ({
                label: city,
                value: city,
              }))}
            />
          </Space>
        </div>
      </div>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">Exclusive</div>
          <ul>
            <li>
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navlink">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navlink">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="navlink">
                Sign Up
              </NavLink>
            </li>
          </ul>

          <div className="elements">
            <div className="search">
              <input type="text" placeholder="What are you looking for?" />
              <Search />
            </div>
            <Like />
            <Baket />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
