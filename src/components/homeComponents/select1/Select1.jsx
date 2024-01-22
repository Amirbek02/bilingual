import React from "react";
import { styled } from "@mui/material";
export default function Select1() {
  return (
    <Header>
      <Component>
        <Buttonf>QUIT TEST</Buttonf>
      </Component>
      <Footerf>
        <Clear>
          <Time>0:00</Time>
          <Cerver>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="822"
              height="9"
              viewBox="0 0 822 9"
              fill="none"
            >
              <path
                d="M4 4L818 5.00247"
                stroke="#D4D0D0"
                stroke-width="8"
                stroke-linecap="round"
              />
            </svg>
          </Cerver>
          <Texter>select the real English words in this list</Texter>
          <Komponenti>
            <Uler>
              <Lier>
                <p>twall</p>
              </Lier>
              <Lier>
                <p>greesey</p>
              </Lier>
              <Lier>
                <p>jelance</p>
              </Lier>
              <Lier>
                <p>advantage</p>
              </Lier>
              <Lier>
                <p>uncove</p>
              </Lier>
              <Lier>
                <p>cability</p>
              </Lier>
            </Uler>
            <Uler>
              <Lier>
                <p>port</p>
              </Lier>
              <Lier>
                <p>ecorated</p>
              </Lier>
              <Lier>
                <p>beathing</p>
              </Lier>
              <Lier>
                <p>distinge</p>
              </Lier>
              <Lier>
                <p>soap</p>
              </Lier>
              <Lier>
                <p>vivory</p>
              </Lier>
            </Uler>
            <Uler>
              <Lier>
                <p>internate</p>
              </Lier>
              <Lier>
                <p>outee</p>
              </Lier>
              <Lier>
                <p>fold</p>
              </Lier>
              <Lier>
                <p>beer</p>
              </Lier>
              <Lier>
                <p>filend</p>
              </Lier>
              <Lier>
                <p>living</p>
              </Lier>
            </Uler>
          </Komponenti>
          <Blockf>
            <Tect>select words and drag here</Tect>
          </Blockf>
          <Ping></Ping>
          <Btnutton>
            <Mily>NEXT</Mily>
          </Btnutton>
        </Clear>
      </Footerf>
    </Header>
  );
}
const Header = styled("div")(() => ({
  margin: "0 auto",
  height: "896px",
  backgroundColor: "#D7E1F8",
}));
const Component = styled("div")(() => ({
  padding: "40px 850px ",
}));
const Buttonf = styled("button")(() => ({
  padding: "13px 34px",
}));
const Footerf = styled("div")(() => ({
  width: "1000px",
  height: "688px",
  flexShrink: "0",
  borderRadius: "10px",
  background: "#FFF",
  margin: "0 430px",
  boxShadow: " 0px 4px 39px -5px rgba(196, 196, 196, 0.60)",
}));
const Clear = styled("div")(() => ({
  marginBottom: "20px",
  padding: "43px 40px",
}));
const Time = styled("div")(() => ({
  marginBottom: "10px",
  fontSize: "20px",
}));
const Cerver = styled("div")(() => ({
  textAlign: "center",
  marginBottom: "30px",
  width: "880px",
}));
const Texter = styled("div")(() => ({
  textAlign: "center",
  color: "#4C4859",

  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textTransform: "capitalize",
}));
const Komponenti = styled("div")(() => ({
  justifyContent: "center",
  alignItems: "center",
  padding: " 40px 0",
}));
const Uler = styled("ul")(() => ({
  alignContent: "center",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  margin: "0 10px 10px 0",
}));
const Lier = styled("li")(() => ({
  padding: "10px 34px",
  borderRadius: "8px",
  border: "1.53px solid var(--Grey-INPUT, #D4D0D0)",
  background: "#FFF",
  cursor: "pointer",
}));
const Blockf = styled("div")(() => ({
  margin: " 0 640px",
  width: "243px",
  flexShrink: "0",
  display: "flex",
  padding: "25.891px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "124px",
  gap: "11.096px",
  borderRadius: "5px",
  border: "1px solid #A8A2A2",
}));
const Tect = styled("p")(() => ({
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "14px",
}));
const Ping = styled("div")(() => ({
  width: "885px",
  margin: "18px 0",
  height: "1.53px",
  background: "#D4D0D0",
}));
const Btnutton = styled("div")(() => ({
  display: "flex",
  width: "143px",
  height: "42px",
  padding: "13px 24px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  flexShrink: "0",
  margin: "0 400px",
  borderRadius: "8px",
  background: "#C4C4C4",
  cursor: "pointer",
  boxShadow:
    "0px 1px 2px 0px rgba(196, 196, 196, 0.20), 0px 1px 2px 0px rgba(196, 196, 196, 0.20)",
}));
const Mily = styled("p")(() => ({}));
