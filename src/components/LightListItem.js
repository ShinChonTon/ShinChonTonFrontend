import React from "react";
import styled from "styled-components";

const LightListItem = ({
  id,
  title,
  hashTag,
  place,
  date,
  maxPerson,
  currentPerson,
}) => {
  const TotalContainer = styled.div`
    width: 100%;
    height: 20%;
  `;
  return (
    <TotalContainer>
      <div className="contents__container">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="hashtag">{hashTag}</div>
        <div className="place">{place}</div>
        <div className="currentSituation">{`${{ currentPerson }}/${{
          maxPerson,
        }}&#128513;`}</div>
      </div>
      <div className="moveDetailBtn">
        <button type="button">&#187;</button>
      </div>
    </TotalContainer>
  );
};

export default LightListItem;
