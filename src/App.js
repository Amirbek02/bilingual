// import { SignInPage } from './pages/SignInPage';

import { styled } from "@mui/material";
import { LandingPage } from "./pages/LandingPage";
import "./App.css";
import MyResult from "./components/myResult/MyResult";
import CheckingYour from "./components/checkingYour/CheckingYour";
import HomePage1 from "./components/homePage1/HomePage1";
import HomePage2 from "./components/homePage2/HomePage2";
import { FullLogo } from "./assets/icons";
import Select1 from "./components/select1/Select1";
import Select2 from "./components/select2/Select2";
import Ansver7 from "./components/ansver7/Ansver7";
import TypeHear from "./components/typeHear/TypeHear";
function App() {
  return (
    <div className="App">
      <Ansver7 />
    </div>
  );
}

export default App;

const Container = styled("div")(() => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));
