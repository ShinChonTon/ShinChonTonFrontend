import React, { useState } from "react";
import styled from "styled-components";
import LightListItem from "../components/LightListItem";
import LightListInput from "../components/LightListInput";

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
  ];

  const LightListContainer = styled.div`
    width: 100%;
    height: 100%;
  `;

  const LightListItems = styled.div`
    width: 400px;
    height: 100%;
  `;

  const ItemsHeader = styled.div`
    display: flex;
  `;

  return (
    <LightListContainer>
      <LightListItems>
        <ItemsHeader>
          <LightListInput />
        </ItemsHeader>
        <div className="items__lists">
          {lightLists.map((li) => (
            <LightListItem {...li} key={li.id} />
          ))}
        </div>
      </LightListItems>
      <div className="lightList__Map"></div>
    </LightListContainer>
  );
};

export default LightList;
