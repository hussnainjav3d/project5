import React, { useState } from "react";

import logo from "../../img/logo.png";
const HeaderMain = () => {
  const [isActive, setActive] = useState(false);
  const toggle = "menu";
  const handleChange = (e) => {
    setActive(!isActive);
  };
  return (
    <div
      data-aos="flip-down"
      data-aos-duration="1500"
      className="header-main flex"
    >
      <div className="logo">
        <img src={logo} alt=""></img>
      </div>
      <div className="menu-btn" onClick={handleChange}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={isActive ? toggle + "show" : toggle}>
        <ul className="menu-list flex">
          <li className="menu-item">
            <a href="#why-us">why us</a>
          </li>
          <li className="menu-item">
            <a href="#about-us">about</a>
          </li>
          <li className="menu-item">
            <a href="#our-services">services</a>
          </li>
          {/* <li className="menu-item">
            <a href="#our-portfolio">portfolio</a>
          </li> */}
          <li className="menu-item">
            <a href="#our-process">process</a>
          </li>
          <li className="menu-item">
            <a href="#people-about-us">review</a>
          </li>
          <li className="menu-item">
            <a href="#our-skills">our skills</a>
          </li>
          <li className="menu-item">
            <a href="#our-contact">contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMain;
