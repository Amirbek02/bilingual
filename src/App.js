// import { SignInPage } from './pages/SignInPage';

import { styled } from "@mui/material";
// import { LandingPage } from './pages/LandingPage';
import "./App.css";
import { HomePage } from "./pages/HomePage";
import Ansver7 from "./components/homeComponents/ansver7/Ansver7";
import Select8 from "./components/homeComponents/Select8/Select8";
import Select9 from "./components/homeComponents/Select9/Select9";

function App() {
  return (
    <div className="App">
      <Select9 />
    </div>
  );
}

export default App;

const Container = styled("div")(() => ({
  maxWidth: "1440px",
  margin: "0 auto",
}));
