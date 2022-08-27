import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import heart from "../img/mypost_category.png";
import location from "../img/mypost_location.png";
import people from "../img/mypost_people.png";
import calender from "../img/mypost_calander.png";
import alert from "../img/mypost_information.png";

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
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const PlaceContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justfiy-content: left;
`;

const PostContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justfiy-content: left;
`;

const CalenderContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justfiy-content: left;
`;

const DetailContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justfiy-content: center;
`;

const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const LightCreate = () => {
  const [category, setCategory] = useState("");
  const [countPeople, setCountPeople] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [detailText, setDetailText] = useState("");
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePeople = (e) => {
    setCountPeople(e.target.value);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleDay = (e) => {
    setDay(e.target.value);
  };

  const handleDetailText = (e) => {
    setDetailText(e.target.value);
  };

  const submitData = () => {
    const lightData = {
      category,
      countPeople,
      month,
      day,
      detailText,
    };
  };
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
          <SelectContainer>
            <img src={heart} style={{ width: "40px", height: "40px" }}></img>
            <select
              onChange={handleCategory}
              value={category}
              style={{
                marginLeft: "20px",
                width: "200px",
                height: "40px",
                border: "2px solid #FD6F22",
                fontSize: "20px",
              }}
            >
              <option>맛집</option>
              <option>운동</option>
              <option>영화</option>
              <option>공연</option>
              <option>하이</option>
            </select>
          </SelectContainer>
          <PlaceContainer>
            <img style={{ width: "40px", height: "40px" }} src={location}></img>
            <p
              style={{
                fontSize: "25px",
                color: "#FD6F22",
                marginLeft: "20px",
              }}
            >
              상세 주소 입력하기
            </p>
          </PlaceContainer>
          <PostContainer>
            <img src={people}></img>
            <input
              onChange={handlePeople}
              value={countPeople}
              style={{
                textAlign: "right",
                fontSize: "30px",
                border: "none",
                borderBottom: "5px solid #FD6F22",
                marginLeft: "20px",
                width: "100px",
              }}
            ></input>
            <p style={{ fontSize: "20px" }}>명</p>
          </PostContainer>
          <CalenderContainer>
            <img style={{ width: "40px", height: "40px" }} src={calender}></img>
            <select
              onChange={handleMonth}
              value={month}
              style={{
                marginLeft: "20px",
                width: "50px",
                height: "40px",
                border: "2px solid #FD6F22",
                fontSize: "20px",
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <p>월</p>
            <select
              onChange={handleDay}
              value={day}
              style={{
                marginLeft: "20px",
                width: "50px",
                height: "40px",
                border: "2px solid #FD6F22",
                fontSize: "20px",
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
            <p>일</p>
            <img
              style={{ width: "40px", height: "40px", marginLeft: "20px" }}
              src={alert}
            ></img>
            <p style={{ color: "gray" }}>번개 모임 당일 날짜로 설정해주세요!</p>
          </CalenderContainer>
          <DetailContainer>
            <p style={{ fontSize: "25px" }}>상세 내용 입력</p>
            <textarea
              placeholder="구체적으로 만나는 장소, 번개 일정, 및 연락 방법에 대해 입력해주세요!
          
                자세할수록 좋아요 :)"
              contentEditable={false}
              value={detailText}
              onChange={handleDetailText}
              style={{
                padding: "20px",
                fontSize: "14px",
                width: "600px",
                height: "200px",
                marginTop: "20px",
                border: "1px solid #FD6F22",
                borderRadius: "10px",
              }}
            ></textarea>
          </DetailContainer>
          <SubmitContainer>
            <img
              style={{ width: "40px", height: "40px", marginLeft: "20px" }}
              src={alert}
            ></img>
            <p style={{ color: "gray", marginRight: "20px" }}>
              제출한 내용은 수정할 수 없어요!
            </p>
            <button
              onClick={submitData}
              style={{
                fontSize: "20px",
                border: "none",
                backgroundColor: "#FF9A50",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              번개 만들기✨
            </button>
          </SubmitContainer>
        </LightCreateContents>
      </LightCreateContainer>
    </LightCreateTotal>
  );
};

export default LightCreate;
