import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const SignUp = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToConfirm, setPasswordToConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [birth, setBirth] = useState("");
  const [useableId, setUsableId] = useState(false);

  // 아이디 중복 확인 버튼 클릭 -> URL, Response 변경 필
  const duplicationCheck = () => {
    axios
      .post("아이디 중복 확인 URL", {
        id: id,
      })
      .then((response) => {
        console.log(response);
        if (response === false) {
          alert("사용 가능한 아이디입니다.");
          setUsableId(true);
        } else {
          alert("중복된 아이디입니다. 다시 시도하세요.");
          setId("");
        }
      });
  };

  // 회원가입 버튼 클릭
  const signUp = () => {
    if (password !== passwordToConfirm) {
      alert("비밀번호와 비밀번호 확인이 다릅니다.");
    } else if (id === "") {
      alert("아이디는 필수항목입니다.");
    } else if (password === "") {
      alert("비밀번호는 필수항목입니다.");
    } else if (passwordToConfirm === "") {
      alert("비밀번호 확인은 필수항목입니다.");
    } else if (nickname === "") {
      alert("닉네임은 필수항목입니다.");
    } else if (birth === "") {
      alert("생년월일은 필수항목입니다.");
    } else if (useableId === false) {
      alert("아이디 중복 확인을 하십시오.");
    }
    // 회원가입 API -> URL, Response 변경 필
    else {
      axios
        .post("아이디 중복 확인 URL", {
          id: id,
          password: password,
          nickname: nickname,
          birth: birth,
        })
        .then((response) => {
          if (response !== "") {
            alert("회원가입 성공!!!");
            console.log(response.data);
            setId("");
            setPassword("");
            setPasswordToConfirm("");
            setNickname("");
            setBirth("");
            navigate("/");
          } else {
            alert(
              "회원가입 실패!!! - 원인으로는 서버 문제 or 아이디 중복 등의 원인이 있을 수 있습니다."
            );
          }
        });
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          position: "fixed",
          top: "150px",
          left: "0%",
          width: "100%",
          height: "90%",
          backgroundColor: "orange",
        }}
      >
        <div>Logo</div>
        <div>
          <div>아이디</div>
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <button>아이디중복확인</button>
        </div>
        <div>
          <div>비밀번호</div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <div>비밀번호 확인</div>
          <input
            onChange={(e) => {
              setPasswordToConfirm(e.target.value);
            }}
          />
        </div>
        <div>
          <div>별명</div>
          <input
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </div>
        <div>
          <div>생일</div>
          <input
            onChange={(e) => {
              setBirth(e.target.value);
            }}
          />
        </div>
        <button onClick={signUp}>가입</button>
      </div>
    </div>
  );
};

export default SignUp;
