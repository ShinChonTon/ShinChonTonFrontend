import React, { useState } from "react";
import styled from "styled-components";
import LightListItem from "../components/LightListItem";
import LightListInput from "../components/LightListInput";
import { useContext } from "react";
import { AppContainer } from "../App";

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
  overflow: hidden auto;
`;

const LightList = () => {
  const { lightLists } = useContext(AppContainer);
  const [dummyData, setDummyData] = useState("");

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
