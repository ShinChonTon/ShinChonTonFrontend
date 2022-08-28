import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContainer } from "../App";

const TotalContainer = styled.div`
  width: 90%;
  padding: 10px;

  height: 150px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 30px;
`;

const HashTagContainer = styled.div`
  border: none;
  width: 50px;
  padding: 1px 4px;
  border-radius: 10px;
  color: #ff4b33;
  background-color: #ffc785;
  margin-top: 3px;
`;

const MoveDetailBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Contentscontainer = styled.div`
  display: flex;
`;

const LightListItem = ({
  id,
  title,
  hashTag,
  place,
  date,
  maxPerson,
  currentPerson,

  handleI
}) => {
  const navigate = useNavigate();
  const { findTargetIdx } = useContext(AppContainer);
  const moveToDetail = () => {
    findTargetIdx(id);
    navigate(`/LightDetail/${id}`);
  };

  return (
    <TotalContainer>
      <Contentscontainer>
        <div className="content__container" style={{ width: "50%" }}>
          <div className="title" onClick={() => {handleI(id)}}>
            <p style={{ fontWeight: "500", fontSize: "19px" }}>{title}</p>
          </div>
          <HashTagContainer>#{hashTag}</HashTagContainer>
          <div className="place" style={{ fontSize: "17px" }}>
            {place}
          </div>
          <div className="currentSituation">
            {currentPerson}/{maxPerson}
          </div>
          <div className="date">
            {new Date(date).toLocaleString().slice(0, 13)}
          </div>
        </div>
        <div
          className="dueDay"
          style={{
            width: "50%",
            display: "flex",
            textAlign: "right",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "22px", color: "#ff4b33", fontWeight: "500" }}>
            모집 마감까지
          </p>
          <p style={{ fontSize: "28px", color: "#ff4b33", fontWeight: "500" }}>
            D-{3}
          </p>
        </div>
      </Contentscontainer>
      <MoveDetailBtn>
        <button
          onClick={moveToDetail}
          type="button"
          style={{
            width: "70%",
            border: "none",
            marginTop: "10px",
            backgroundColor: "#FFC785",
            borderRadius: "10px",
          }}
        >
          자세히보기
        </button>
      </MoveDetailBtn>
    </TotalContainer>
  );
};

export default LightListItem;
