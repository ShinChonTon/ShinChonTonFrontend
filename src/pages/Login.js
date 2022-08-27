import React from "react";
import Header from "../components/Header";
import logo from "../img/logo_big.png";
import background from "../img/background.jpeg"

const Login = () => {
  return <div style={{}}>
    <Header/>
    <div style={{ position: "fixed", top: "0px", left: "0%", width: "100%", height: "100%", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
      <div />
      <div style={{display: 'grid', gridTemplateRows: '2fr 3fr 1fr 1fr 2fr 3fr'}}>
        <div/>
        <div style={{}}>
          <div style={{width: "100%", display: 'grid', justifyItems: 'center'}}>
            <img src={logo} style={{ width: "320px", height: "240px" }}/>
          </div>
        </div>
        <div style={{width: "100%", display: 'grid', justifyItems: 'center', flexDirection: 'row', gridTemplateColumns: '1fr 3fr 1fr', alignItems: 'center'}}>
          <div>아이디</div>
          <input
            style={{ width: "100%", height: "60%", fontSize: "20px", border: '3px solid #FD6F22', borderRadius: '10px'}}
            
          />
          <div/>
        </div>
        <div style={{width: "100%", display: 'grid', justifyItems: 'center', flexDirection: 'row', gridTemplateColumns: '1fr 3fr 1fr', alignItems: 'center'}}>
          <div>비밀번호</div>
          <input
            style={{ width: "100%", height: "60%", fontSize: "20px", border: '3px solid #FD6F22', borderRadius: '10px'}}
            
          />
          <div/>
        </div>
        <div style={{width: "100%", display: 'flex', justifyItems: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <button style={{
                      width: "60%",
                      height: "40%",
                      backgroundColor: "#FF9A50",
                      borderRadius: "10px",
                      border: "none",
                      fontSize: "20px",
                    }}>가입</button>
        </div>
        <div/>
      </div>
      <div/>
    </div>
  </div>;
};

export default Login;
