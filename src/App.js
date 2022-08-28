import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import LightCreate from "./pages/LightCreate";
import LightDetail from "./pages/LightDetail";
import LightList from "./pages/LightList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Reset } from "styled-reset";
import "./App.css";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AppContainer = createContext();

export const ThemeContext = createContext();


function App() {

  const [userOn, setUserOn] = useState(true)

  const AppDiv = styled.div`
    width: 80%;
  `;

  const [target, setTarget] = useState("");

  const findTargetIdx = (idx) => {
    setTarget(idx - 1);
  };

  const lightLists = [
    {
      id: 1,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 6,
    },
    {
      id: 2,
      title: "술먹방",
      hashTag: "음주",
      place: "마포구 신수동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 6,
    },
    {
      id: 3,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
    },
    {
      id: 4,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
    },
    {
      id: 5,
      title: "꿀잼 방탈출",
      hashTag: "취미",
      place: "마포구 유린동",
      date: new Date().getTime(),
      maxPerson: 10,
      currentPerson: 5,
    },
  ];

  return (
    <ThemeContext.Provider value={{userOn, setUserOn}}>
    <BrowserRouter>
      <Reset />
      <AppContainer.Provider value={{ lightLists, findTargetIdx }}>
        <div className="app">
          {/* <Link to="/">Main</Link>
        <Link to="/MyPage">MyPage</Link>
        <Link to="/SignUp">SignUp</Link>
        <Link to="/Login">Login</Link>
        <Link to="/LightList">LightList</Link>
        <Link to="/LightDetail:id">LightDetail</Link>
        <Link to="/LightCreate">LightCreate</Link> */}
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/MyPage" element={<MyPage />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/LightList" element={<LightList />}></Route>
            <Route
              path="/LightDetail/:id"
              element={<LightDetail {...lightLists[target]} />}
            ></Route>
            <Route path="/LightCreate" element={<LightCreate />}></Route>
          </Routes>
          <AppDiv className="App"></AppDiv>
        </div>
      </AppContainer.Provider>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
