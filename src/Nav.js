import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import logo from './img/logo.png'
import dummy from './img/dummy.png'

const Nav = () => {

  return (
    <div style={{position: 'fixed', top: '0%', left: '0%', width: '100%', height: '150px', backgroundColor: 'white'}}>
        <div>
        <Link to="/">
            <img src={logo} style={{position:'fixed', width: '200px', height: '150px', left: '0%', top: '0%'}}/>
        </Link>
        <Link to="/MyPage">
          <img src={dummy} style={{position:'fixed', width: '200px', height: '150px', right: '0%', top: '0%'}}/>
        </Link>
        </div>
  </div>
  );
};

export default Nav;
