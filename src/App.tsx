import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/Cloud_Runner_Logo.png";
import LoginPage from "./pages/LoginPage/LoginPage";
import Match from "./pages/MatchPage/MatchPage";
import Market from "./pages/MarketPage/MarketPage";
// import Board from "./pages/BoardPage/BoardPage";
// import MyPage from "./pages/MyPage/MyPage";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/match">직관 매칭</Link>
          </li>
          <li>
            <Link to="/market">굿즈 장터</Link>
          </li>
          <li>
            <Link to="/board">게시판</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <li>
            <Link to="/loginpage">로그인</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header title="" subtitle="" />
        <Routes>
          <Route path="/Match" element={<Match />} />
          <Route path="/Market" element={<Market />} />
          {/* <Route path="/Board" element={<Board />} />
          <Route path="/MyPage" element={<MyPage />} /> */}
          <Route path="/Loginpage" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
