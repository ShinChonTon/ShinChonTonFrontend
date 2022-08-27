import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const LightCreateContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const LightCreateTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  dislay: flex;
  width: 100%;
`;

const LightCreateContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LightCreate = () => {
  return (
    <LightCreateTotal>
      <Header />
      <LightCreateContainer>
        <InputContainer>
          <input
            placeholder="번개 제목을 입력하세요"
            style={{
              height: "50px",
              width: "100%",
              border: "none",
              fontSize: "30px",
            }}
          ></input>
        </InputContainer>
        <hr
          style={{
            border: "1px solid #FF8C37",
            height: "2px",
            width: "100%",
            backgroundColor: "#FF8C37",
          }}
        ></hr>
        <LightCreateContents>
          <div>
            <select>
              <option>맛집</option>
              <option>운동</option>
              <option>영화</option>
              <option>공연</option>
              <option>하이</option>
            </select>
          </div>
        </LightCreateContents>
      </LightCreateContainer>
    </LightCreateTotal>
  );
};

export default LightCreate;
