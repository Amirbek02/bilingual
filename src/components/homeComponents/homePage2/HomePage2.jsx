import React from "react";
import { styled } from "@mui/material";
import { FullLogo } from "../../assets/icons";
export default function HomePage2() {
  return (
    <Header>
      <Fuulla>
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
      </Fuulla>
      <Contenrt>
        <Functionder>
          <p>Take a free practice test and estimate your score</p>
          <Apartment>
            <ul>
              <img src="" alt="logo" />
            </ul>
            <Ulop>
              <Liop>
                <img src="" alt="logo" />
                <p>See what the test is like *</p>
              </Liop>
              <Liop>
                <img src="" alt="logo" />
                <p>See what the test is like *</p>
              </Liop>
              <Liop>
                <img src={FullLogo} alt="logo" />
                <p>See what the test is like *</p>
              </Liop>
            </Ulop>
          </Apartment>
        </Functionder>
      </Contenrt>
    </Header>
  );
}
const Fuulla = styled("div")(() => ({
  backgroundColor: "#f0f0f0",
}));
const Header = styled("div")(() => ({
  maxWidth: "1600px",
  margin: "0 auto",
  height: "800px",
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
const Contenrt = styled("div")(() => ({
  backgroundColor: " #D7E1F8",
  padding: "80px 330px",
}));
const Functionder = styled("div")(() => ({
  textAlign: "center",

  width: "900px",
  height: "549px",
  flexShrink: "0",
  borderRadius: "10px",
  background: "white",
}));
const Apartment = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));
const Ulop = styled("div")(() => ({
  gap: "30px",
}));
const Liop = styled("div")(() => ({
  display: "flex",
}));
