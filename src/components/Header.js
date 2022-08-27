import React from "react";
import logo from "../img/logo.png";
import profile from "../img/profile.PNG";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: 'fixed',
        width: "100%",
        height: "150px",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 50px",
        alignItems: "center",
        backgroundColor: 'rgba( 255, 255, 255, 0.0 )',
        zIndex: '3'
      }}
    >
      <Link to="/">
        <img src={logo}></img>
      </Link>
      <Link to="/MyPage">
        <img src={profile} style={{ width: "50px", height: "50px" }}></img>
      </Link>
    </div>
  );
};

export default Header;
