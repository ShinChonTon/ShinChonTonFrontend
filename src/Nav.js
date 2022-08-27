import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Nav = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "10%",
        backgroundColor: "tomato",
      }}
    >
      <div>
        <Link to="/room">Logo</Link>
        <Link to="/My">
          <div>마이페이지</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
