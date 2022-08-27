import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import LightCreate from "./pages/LightCreate";
import LightDetail from "./pages/LightDetail";
import LightList from "./pages/LightList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const AppDiv = styled.div`
    width: 80%;
  `;
  return (
    <BrowserRouter>
      <div className="app">
        <Link to="/">Main</Link>
        <Link to="/MyPage">MyPage</Link>
        <Link to="/SignUp">SignUp</Link>
        <Link to="/Login">Login</Link>
        <Link to="/LightList">LightList</Link>
        <Link to="/LightDetail:id">LightDetail</Link>
        <Link to="/LightCreate">LightCreate</Link>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/MyPage" element={<MyPage />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/LightList" element={<LightList />}></Route>
          <Route path="/LightDetail/id:" element={<LightDetail />}></Route>
          <Route path="/LightCreate" element={<LightCreate />}></Route>
        </Routes>
        <AppDiv className="App"></AppDiv>
      </div>
    </BrowserRouter>
  );
}

export default App;
