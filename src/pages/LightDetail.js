import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useContext } from "react";
import { AppContainer } from "../App";
import people from "../img/mypost_people.png";
import A from "../img/1.PNG";
import B from "../img/2.PNG";
import C from "../img/3.PNG";
import D from "../img/4.PNG";
import E from "../img/5.PNG";
import F from "../img/6.PNG";
import write from "../img/detail_detail.png";

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const TogetherContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 90%;
  font-size: 20px;
`;

const NotifiContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 70px;
  font-weight: 500;
  border-radius: 10px;
  background-color: #ffc785;
  font-size: 27px;
  display: flex;
  align-items: center;
  padding-left: 25px;
`;

const HashTagContainer = styled.div`
  border: none;
  width: 80px;
  padding: 1px 2px;
  border-radius: 10px;
  color: #ff4b33;
  background-color: #ffc785;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RealTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailTotal = styled.div`
  padding-top: 150px;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const LightDetail = ({
  id,
  title,
  hashTag,
  place,
  date,
  maxPerson,
  currentPerson,
}) => {
  return (
    <>
      <Header />
      <RealTotal>
        <DetailTotal>
          <TitleContainer>
            <p
              style={{
                fontSize: "30px",
                color: "black",
              }}
            >
              {title}
            </p>
            <HashTagContainer>#{hashTag}</HashTagContainer>
          </TitleContainer>
          <hr
            style={{
              border: "1px solid #FF8C37",
              height: "2px",
              width: "100%",
              backgroundColor: "#FF8C37",
            }}
          ></hr>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <NotifiContainer>
              {`${place}에서 ${new Date(date)
                .toLocaleDateString()
                .slice(6, 7)}월 ${new Date(date)
                .toLocaleDateString()
                .slice(9, 11)}일 ${new Date(date)
                .toLocaleTimeString()
                .slice(3, 4)}시에 만나요!`}
            </NotifiContainer>
          </div>
          <TogetherContainer>
            <img src={people}></img>
            <p
              style={{ marginLeft: "10px" }}
            >{`함께하는 사람들(${currentPerson}/${maxPerson})`}</p>
            <div
              style={{
                display: "flex",
                gap: "40px",
                marginLeft: "20px",
                height: "200px",
                alignItems: "center",
              }}
            >
              <ImageContainer>
                <img
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                  }}
                  src={A}
                ></img>
              </ImageContainer>
              <ImageContainer>
                <img
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                  }}
                  src={B}
                ></img>
              </ImageContainer>
              <ImageContainer>
                <img
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                  }}
                  src={C}
                ></img>
              </ImageContainer>
              <ImageContainer>
                <img
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                  }}
                  src={D}
                ></img>
              </ImageContainer>
              <ImageContainer>
                <img
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                  }}
                  src={E}
                ></img>
              </ImageContainer>
              <ImageContainer>
                <img
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                  }}
                  src={F}
                ></img>
              </ImageContainer>
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                }}
              ></div>
            </div>
          </TogetherContainer>
          <hr
            style={{
              border: "1px solid #FF8C37",
              height: "2px",
              width: "100%",
              backgroundColor: "#FF8C37",
            }}
          ></hr>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img style={{ width: "45px", height: "50px" }} src={write}></img>
            <p style={{ marginLeft: "10px", fontSize: "20px" }}>활동계획</p>
          </div>
          <div
            style={{ paddingLeft: "40px", marginTop: "40px", fontSize: "20px" }}
          >
            <p>
              방탈출 할 브레인 찾습니다...저희는 여기 골목에서 만날 예정입니다.
            </p>
          </div>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                width: "400px",
                fontSize: "30px",
                borderRadius: "20px",
                border: "none",
              }}
            >
              번개 모임에 신청하기
            </button>
          </div>
        </DetailTotal>
      </RealTotal>
    </>
  );
};

export default LightDetail;
