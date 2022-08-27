import React, { useState } from "react";
import styled from "styled-components";
import LightListItem from "../components/LightListItem";
import LightListInput from "../components/LightListInput";

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
  overflow: auto;
`;

const LightList = () => {
  const [dummyData, setDummyData] = useState("");

  const lightLists = [
    {
      id: 1,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
    },
    {
      id: 2,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
    },
    {
      id: 3,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
    },
    {
      id: 4,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
    },
    {
      id: 5,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
    },
  ];

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
                <LightListItem {...li} key={li.id} />
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
        <div className="lightList__Map"></div>
      </LightListaddContainer>
    </LightListContainer>
  );
};

export default LightList;
