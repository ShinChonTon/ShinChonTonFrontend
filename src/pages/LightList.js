import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LightListItem from "../components/LightListItem";
import LightListInput from "../components/LightListInput";
import { useContext } from "react";
import { AppContainer } from "../App";
import axios from "axios";

const LightListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const LightListItems = styled.div`
  padding: 10px;
  width: 350px;
  box-shadow: 1px 1px 5px gray;
  height: 100%;
`;

const LightListaddContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemsHeader = styled.div`
  width: 100%;
  display: flex;
`;

const ItemAnotherContainer = styled.div`
  width: 100%;
`;

const ItemsLists = styled.div`
  height: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  overflow: hidden auto;
`;

const LightList = () => {
  const [dummyData, setDummyData] = useState("");
  const [clickOn, setClickOn] = useState(false);
  const [i, setI] = useState(1);
  const handleI = (a) => {
    setI(a);
  };

  const lightLists = [
    {
      id: 1,
      title: "꿀잼 방탈출 - 1",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
      Y: 126.949671,
      X: 37.5432377,
    },
    {
      id: 2,
      title: "홍익대",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
      Y: 126.925618,
      X: 37.5507119,
    },
    {
      id: 3,
      title: "서강대",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
      Y: 126.939175,
      X: 37.5511794,
    },
    {
      id: 4,
      title: "이화여대",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
      Y: 126.947428,
      X: 37.5625359,
    },
    {
      id: 5,
      title: "연세대",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
      Y: 126.937546,
      X: 37.5637563,
    },
  ];

  const { kakao } = window;

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(lightLists[i - 1].X, lightLists[i - 1].Y), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var markerPosition = new kakao.maps.LatLng(
      lightLists[i - 1].X,
      lightLists[i - 1].Y
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [i]);

  console.log(i);
  return (
    <LightListContainer>
      <LightListaddContainer>
        <LightListItems>
          <ItemsHeader>
            <LightListInput />
          </ItemsHeader>
          <ItemAnotherContainer>
            <ItemsLists>
              {lightLists.map((li) => (
                <LightListItem {...li} key={li.id} handleI={handleI} />
              ))}
            </ItemsLists>
          </ItemAnotherContainer>
          <div
            className="redirect"
            style={{
              marginTop: "10px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "80%",
                height: "100%",
                borderRadius: "10px",
                border: "none",
                fontSize: "19px",
                backgroundColor: "#FF9A50",
              }}
            >
              번개모임 설정 다시하기
            </button>
          </div>
        </LightListItems>
        <div
          id="map"
          className="lightList__Map"
          style={{
            paddingLeft: "350px",
            backgroundColor: "tomato",
            width: `${window.innerWidth - 350}px`,
          }}
        ></div>
      </LightListaddContainer>
    </LightListContainer>
  );
};

export default LightList;
