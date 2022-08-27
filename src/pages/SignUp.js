import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import logo from "../img/logo_big.png";
import background from "../img/background.jpeg"


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
      <div style={{ position: "fixed", top: "0px", left: "0%", width: "100%", height: "100%", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
      <div/>
      <div style={{display: 'grid', gridTemplateRows: '2fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 3fr'}}>
        <div/>
        <div style={{width: "100%", display: 'grid', justifyItems: 'center'}}>
          <img src={logo} style={{ width: "280px", height: "210px" }} />
        </div>
        <div style={{width: "100%", display: 'grid', justifyItems: 'center', flexDirection: 'row', gridTemplateColumns: '1fr 3fr 1fr', alignItems: 'center'}}>
          <div>아이디</div>
          <input
            style={{ width: "100%", height: "60%", fontSize: "20px", border: '3px solid #FD6F22', borderRadius: '10px'}}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <button style={{
                      width: "100px",
                      height: "40px",
                      backgroundColor: "#FFC785",
                      borderRadius: "10px",
                      border: "none",
                      fontSize: "12.5px",
                    }}>중복확인</button>
        </div>
        <div style={{width: "100%", display: 'grid', justifyItems: 'center', flexDirection: 'row', gridTemplateColumns: '1fr 3fr 1fr', alignItems: 'center'}}>
          <div>닉네임</div>
          <input
            style={{ width: "100%", height: "60%", fontSize: "20px", border: '3px solid #FD6F22', borderRadius: '10px'}}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <div/>
        </div>
        <div style={{width: "100%", display: 'grid', justifyItems: 'center', flexDirection: 'row', gridTemplateColumns: '1fr 3fr 1fr', alignItems: 'center'}}>
          <div>비밀번호</div>
          <input
            style={{ width: "100%", height: "60%", fontSize: "20px", border: '3px solid #FD6F22', borderRadius: '10px'}}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div/>
        </div>
        <div style={{width: "100%", display: 'grid', justifyItems: 'center', flexDirection: 'row', gridTemplateColumns: '1fr 3fr 1fr', alignItems: 'center'}}>
          <div>비밀번호 확인</div>
          <input
            style={{ width: "100%", height: "60%", fontSize: "20px", border: '3px solid #FD6F22', borderRadius: '10px'}}
            onChange={(e) => {
              setPasswordToConfirm(e.target.value);
            }}
          />
          <div/>
        </div>
        <div style={{width: "100%", display: 'grid', justifyItems: 'center', flexDirection: 'row', gridTemplateColumns: '1fr 3fr 1fr', alignItems: 'center'}}>
          <div>생일</div>
          <input
            style={{ width: "100%", height: "60%", fontSize: "20px", border: '3px solid #FD6F22', borderRadius: '10px'}}
            onChange={(e) => {
              setBirth(e.target.value);
            }}
          />
          <div/>
        </div>
        <div style={{width: "100%", display: 'flex', justifyItems: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <button onClick={signUp}  style={{
                      width: "150px",
                      height: "50px",
                      backgroundColor: "#FD6F22",
                      borderRadius: "10px",
                      border: "none",
                      fontSize: "20px",
                    }}>가입</button>
        </div>
      </div>
    </div>
    <div/>
    </div>
  );
};

export default SignUp;
