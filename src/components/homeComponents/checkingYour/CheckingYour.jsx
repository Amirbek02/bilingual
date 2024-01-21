import React from "react";
import { styled } from "@mui/material";
import { FullLogo } from "../../assets/icons";

export const CheckingYour = (props) => {
  return (
    <Header>
      <Containertitle>
        <Title>
          <img src={FullLogo} alt="logo" />
        </Title>
        <Linkterder>
          <Put>TESTS</Put>
          <REsul>MY RESULTS</REsul>
          <Bunnon>LOG OUT</Bunnon>
        </Linkterder>
      </Containertitle>
      <Kontent>
        <Secont>
          <Three>
            <Text>Checking your device...</Text>
            <Server>
              this process is automatic, and may take a few second. please
              wait...
            </Server>
          </Three>
        </Secont>
      </Kontent>
    </Header>
  );
};
export default CheckingYour;
const Header = styled("div")(() => ({
  backgroundColor: "#f0f0f0",
  maxWidth: "1600px",
  margin: "0 auto",
}));

const Containertitle = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  margin: "0 120px 0 120px",
}));
const Title = styled("div")(() => ({
  display: "flex",
  alignContent: "center",
}));
const Linkterder = styled("div")(() => ({
  paddingTop: "10px",
  paddingBottom: "10px",
  display: "flex",
  alignItems: "center",
  gridGap: "50px",
  cursor: "pointer",
}));
const Put = styled("p")(() => ({
  color: "#3A10E5",
}));
const REsul = styled("p")(() => ({}));
const Bunnon = styled("button")(() => ({
  padding: "10px 24px",
  borderRadius: "14px",
  color: "black",
  textAlign: "center",
  fontFamily: " ",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",

  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
}));
const Kontent = styled("div")(() => ({
  backgroundColor: "#D7E1F8",
  padding: "30px",
}));
const Secont = styled("div")(() => ({
  width: "1000px",
  height: "549px",
  flexShrink: "0",
  margin: "0 240px",
  justifyContent: "center  ",
  borderRadius: "10px",
  background: "#fff",

  textAlign: "center",
}));
const Three = styled("div")(() => ({}));
const Text = styled("h1")(() => ({
  padding: "20px 0",
  fontSize: "40px",
  fontFamily: "DINNextRoundedLTW01-Regular",

  fontStyle: "normal",
  fontWeight: "400",
}));
const Server = styled("h1")(() => ({
  color: "#4C4859",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "400",
}));
// const = styled('')(() => ({}))
