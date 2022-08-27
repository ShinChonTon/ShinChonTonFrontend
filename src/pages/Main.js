import React from "react";
import { useState } from "react";
import { CitiesInfo } from "../data/cities";
import { Link } from "react-router-dom";

const Main = () => {
  const regions = CitiesInfo();
  const [userOn, setUserOn] = useState(false);

  const [region, setRegion] = useState("서울특별시");
  const [city, setCity] = useState("강남구");

  const keys = Object.keys(regions);
  const regionSelectors = [];
  for (let i = 0; i < keys.length; i++) {
    regionSelectors.push(<option>{keys[i]}</option>);
  }
  const citySelectors = [];
  for (let i = 0; i < regions[region].length; i++) {
    citySelectors.push(<option>{regions[region][i]}</option>);
  }

  console.log(region, city);

  return (
    <div>
      <div>Logo</div>
      {userOn ? (
        // user (로그인 O)
        <div>
          <div>지금 5000개의 번개모임이 당신을 기다려요!</div>
          <select
            onChange={(e) => {
              setRegion(e.target.value);
              setCity(regions[e.target.value][0]);
            }}
          >
            {regionSelectors}
          </select>
          <select
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            {citySelectors}
          </select>
          <button>번개 참여</button>
          <button>번개 만들기</button>
        </div>
      ) : (
        // not user (로그인 X)
        <div>
          <div>모든 번개모임의 중심 이리온</div>
          <button>로그인하여 번개하기</button>
          <div>현재 500개의 번개가 당신을 기다립니다.</div>
          <Link to="/SignUp">
            <button>회원가입</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Main;
