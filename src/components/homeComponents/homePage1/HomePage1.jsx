import React from "react";
import { styled } from "@mui/material";
import { Fromder } from "../../assets/icons/Group.svg";

export function HomePage1() {
  return (
    <Header>
      <Containertitle>
        <Title>
          <img src="" alt="logo" />
        </Title>
        <Linkterder>
          <Put>TESTS</Put>
          <REsul>MY RESULTS</REsul>
          <Bunnon>LOG OUT</Bunnon>
        </Linkterder>
      </Containertitle>
      <Content>
        <Praiver>
          <Imager>
            <img src="" alt="img" />
          </Imager>
          <Texter>
            <Pull>15 minutes</Pull>
            <Full>English advanced test</Full>
            <p>Train as much as you like.</p>
          </Texter>
          <Btner>TRY TEST</Btner>
        </Praiver>
      </Content>
      <Footer>
        <Component>
          <img src="" alt="logo" />
          <Pot>© 2024 Peaksoft</Pot>
        </Component>
      </Footer>
    </Header>
  );
}
export default HomePage1;
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
const Content = styled("div")(() => ({
  backgroundColor: "#D7E1F8",
  height: "760px",
  padding: " 150px 340px",
}));
const Praiver = styled("div")(() => ({
  position: "absolute",
  width: "863px",
  background: "white",
  height: "250px",
  flexShrink: "0",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));
const Imager = styled("div")(() => ({}));
const Texter = styled("div")(() => ({}));
const Pull = styled("p")(() => ({
  color: "var(--button, #3A10E5)",
  fontFamily: " DINNextRoundedLTPro-Bold",
  fontSize: "19px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  paddingBottom: "20px ",
}));
const Full = styled("p")(() => ({
  paddingBottom: "20px",

  width: "248px",
}));
const Btner = styled("div")(() => ({
  padding: "7px 24px",
  alignItems: "center",
  gap: "8px",
  flexShrink: "0",
  border: "1px solid black",
  borderRadius: "10px",
  marginTop: "50px",
  cursor: "pointer",
}));
const Footer = styled("div")(() => ({
  background: "white",
  height: "55px",
}));
const Component = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const Pot = styled("p")(() => ({
  color: "var(--Gray-400, #98A2B3),",
  fontFamily: "Inter",
  fontSize: "15px",
  padding: "15px",
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: "400",
  alignItems: "center",
}));
