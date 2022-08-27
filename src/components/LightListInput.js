import React from "react";
import dummy from "../img/logo.png";
import styled from "styled-components";

const LightListInput = () => {
  const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;

  const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <HeaderContainer>
      <img src={dummy} style={{ width: "140px", height: "70px" }}></img>
      <InputContainer>
        <input
          style={{
            marginTop: "20px",
            height: "50px",
            width: "90%",
            borderRadius: "5px",
            border: "2px solid #FD6F22",
            boxShadow: "1px 1px 5px gray",
          }}
        ></input>
      </InputContainer>
    </HeaderContainer>
  );
};

export default LightListInput;
