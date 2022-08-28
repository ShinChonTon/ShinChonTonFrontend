import React from "react";
import { useState, useContext } from "react";
import { CitiesInfo } from "../data/cities";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import logo from "../img/logo_big.png";
import background from "../img/background.jpeg"
import { ThemeContext } from "../App";


const Main = () => {
  const regions = CitiesInfo();

  const {userOn, setUserOn} = useContext(ThemeContext);
  
  // const [userOn, setUserOn] = useState(true);

  const [region, setRegion] = useState("서울특별시");
  const [city, setCity] = useState("강남구");
  const [category, setCategory] = useState("영화");

  const keys = Object.keys(regions);
  const regionSelectors = [];
  for (let i = 0; i < keys.length; i++) {
    regionSelectors.push(
      <option style={{ textAlign: "center" }}>{keys[i]}</option>
    );
  }
  const citySelectors = [];
  for (let i = 0; i < regions[region].length; i++) {
    citySelectors.push(
      <option style={{ textAlign: "center" }}>{regions[region][i]}</option>
    );
  }

  console.log(region, city, category);

  return (
    <div>
      <Header />
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: "0%",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${background})`, backgroundSize: 'cover'
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr 1fr",
            height: "100%",
          }}
        >
          <div />
          <div
            style={{
              display: "grid",
              gridTemplateRows: "0.5fr 1fr 0.1fr 3fr",
              width: "100%",
              height: "100%",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div/>
            <div
              style={{
                display: "grid",
                width: "100%",
                height: "100%",
                justifyItems: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <img src={logo} style={{ width: "400px", height: "300px" }} />
              <text style={{fontSize: '25px'}}>모든 번개 모임의 중심 이리온</text>
            </div>
            <div/>
            {userOn ? (
              // user (로그인 O)
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  gridTemplateRows: "0.9fr 0.9fr 0.9fr 1fr 0.5fr 1fr 10fr",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <select
                    onChange={(e) => {
                      setRegion(e.target.value);
                      setCity(regions[e.target.value][0]);
                    }}
                    style={{
                      width: "40%",
                      height: "60%",
                      fontSize: "20px",
                      borderColor: "#FD6F22",
                      borderWidth: "3px",
                    }}
                  >
                    {regionSelectors}
                  </select>
                </div>
                <div
                  style={{
                    display: "grid",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <select
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    style={{
                      width: "40%",
                      height: "60%",
                      fontSize: "20px",
                      borderColor: "#FD6F22",
                      borderWidth: "3px",
                    }}
                  >
                    {citySelectors}
                  </select>
                </div>
                <div
                  style={{
                    display: "grid",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <select
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    style={{
                      width: "40%",
                      height: "60%",
                      fontSize: "20px",
                      borderColor: "#FD6F22",
                      borderWidth: "3px",
                    }}
                  >
                    <option style={{ textAlign: "center" }}>영화</option>
                    <option style={{ textAlign: "center" }}>스포츠</option>
                    <option style={{ textAlign: "center" }}>맛집</option>
                  </select>
                </div>
                <div
                  style={{
                    display: "grid",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <Link to="/LightList">
                  <button
                    style={{
                      backgroundColor: "#FF9A50",
                      width: "250px",
                      height: "80%",
                      borderRadius: "20px",
                      border: "none",
                      fontSize: "25px",
                    }}
                  >
                    번개 참여하기!
                  </button>
                  </Link>
                </div>
                <div />
                {/* <div style={{height: 'center', width: 'center', display: 'grid', backgroundColor: 'blue', flexDirection: 'row'}}>
                  <div>내가 직접 번개모임을 생성하고 싶다면 ?</div>
                  <button style={{backgroundColor: '#FF9A50', width: '250px', height: '72px', borderRadius: '20px', border: 'none', fontSize: '30px'}}>번개 참여하기!</button>
                </div> */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ textAlign: "center", fontSize: "20px" }}>
                    내가 직접 번개모임을 생성하고 싶다면 ?
                  </div>
                  <div />
                  <button
                    style={{
                      width: "250px",
                      height: "80%",
                      backgroundColor: "#FD6F22",
                      borderRadius: "20px",
                      border: "none",
                      fontSize: "25px",
                    }}
                  >
                    번개 만들기!
                  </button>
                </div>
              </div>
            ) : (
              // not user (로그인 X)
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  gridTemplateRows: "1fr 0.5fr 2fr 2fr",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      backgroundColor: "#FF9A50",
                      width: "360px",
                      height: "72px",
                      borderRadius: "20px",
                      border: "none",
                      fontSize: "30px",
                    }}
                  >
                    로그인하기 ⚡
                  </button>
                </Link>
                </div>
                <div>
                  <div style={{ textAlign: "center", fontSize: "15px" }}>
                    현재 총 6,590개의 번개가 당신을 기다립니다!
                  </div>
                  <div style={{ textAlign: "center", fontSize: "15px" }}>
                    아직 회원이 아니라면?
                  </div>
                </div>
                <Link to="/SignUp" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      display: "grid",
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        color: "#FD6F22",
                        border: "none",
                        background: "none",
                        fontSize: "20px",
                        textDecoration: "none",
                      }}
                    >
                      회원가입
                    </p>
                  </div>
                </Link>
                <div />
              </div>
            )}
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Main;
