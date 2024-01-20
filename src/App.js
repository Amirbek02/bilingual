// import { SignInPage } from './pages/SignInPage';

import { styled } from "@mui/material";
import { LandingPage } from "./pages/LandingPage";
import "./App.css";
import MyResult from "./components/myResult/MyResult";
import CheckingYour from "./components/checkingYour/CheckingYour";
import HomePage1 from "./components/homePage1/HomePage1";
import HomePage2 from "./components/homePage2/HomePage2";
import { FullLogo } from "./assets/icons";
function App() {
  return (
    <div className="App">
      <MyResult />
      <LandingPage />

      {/* <div class="header">
        <div class="container">
          <div class="header-title">
            <img
              width="174px"
              height="42px"
              class="header_img"
              src="./img/Group.png"
              alt=""
            />
          </div>
          <div class="header-link">
            <p class="header_p">TESTS</p>
            <p>MY RESULTS</p>
            <button class="header_btn">LOG OUT</button>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;

const Container = styled("div")(() => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));
