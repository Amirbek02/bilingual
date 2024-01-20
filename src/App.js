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
    </div>
  );
}

export default App;

const Container = styled("div")(() => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));
