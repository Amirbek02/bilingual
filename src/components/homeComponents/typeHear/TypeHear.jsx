import React from "react";
import { styled } from "@mui/material";
export default function Select2() {
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
          <Texter>type the statement you hear</Texter>
          <Componentr>
            <Ifrt>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
              >
                <path
                  d="M88 44C88 68.3005 68.3005 88 44 88C19.6995 88 0 68.3005 0 44C0 19.6995 19.6995 0 44 0C68.3005 0 88 19.6995 88 44Z"
                  fill="url(#paint0_linear_948_11359)"
                />
                <path
                  d="M41.7411 28C43.6381 28 45.4074 29.3361 46.0461 31.4775C46.2806 32.3727 46.3759 33.2697 46.4675 34.1343L46.5532 34.9207C46.8812 37.545 46.8812 50.4378 46.5532 53.0812L46.4675 53.8962C46.3855 54.7188 46.3016 55.5701 46.0595 56.4786C45.4208 58.6143 43.7182 60 41.785 60C41.724 60 41.663 60 41.5943 59.9981C40.5267 59.9981 39.3656 59.3568 38.7078 58.7976L32.2961 53.5698H29.0035C26.4621 53.5698 24.6013 51.77 24.2639 48.9853C23.8749 46.2006 23.9512 41.4234 24.2639 38.8925C24.6318 36.2567 26.5803 34.4302 29.0035 34.4302H32.2961L38.5858 29.2788C39.3446 28.6337 40.683 27.9962 41.7411 28ZM57.2547 28.393C58.0135 27.8662 59.0563 28.059 59.5768 28.8129C62.429 32.9184 64 38.314 64 43.9998C64 49.6894 62.429 55.0832 59.5768 59.1886C59.2661 59.6372 58.7532 59.9063 58.206 59.9063C57.8667 59.9063 57.5387 59.8032 57.2566 59.6085C56.5016 59.0798 56.3147 58.0396 56.8371 57.2838C59.3042 53.73 60.6636 49.0119 60.6636 43.9998C60.6636 38.9897 59.3042 34.2716 56.8371 30.7177C56.3147 29.9638 56.5016 28.9217 57.2547 28.393ZM51.5061 33.7927C52.2668 33.2678 53.3058 33.4568 53.8301 34.2126C55.6718 36.8656 56.688 40.3412 56.688 44C56.688 47.6588 55.6718 51.1344 53.8301 53.7874C53.5175 54.2359 53.0065 54.5051 52.4593 54.5051C52.12 54.5051 51.7901 54.402 51.508 54.2073C50.753 53.6786 50.5661 52.6365 51.0904 51.8826C52.5489 49.7812 53.3516 46.9813 53.3516 44C53.3516 41.0168 52.5489 38.2188 51.0904 36.1174C50.5661 35.3635 50.753 34.3214 51.5061 33.7927Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_948_11359"
                    x1="44"
                    y1="0"
                    x2="44"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3A10E5" />
                    <stop offset="0.398958" stop-color="#3A10E5" />
                    <stop offset="0.544792" stop-color="#360FD5" />
                    <stop offset="0.878125" stop-color="#1D0A6B" />
                  </linearGradient>
                </defs>
              </svg>
            </Ifrt>
            <Flajok>
              <Finput placeholder="Your response" />
              <Puiii>number of replays left: 2</Puiii>
            </Flajok>
          </Componentr>
          <Ping></Ping>
          <Btnutton>
            <Mily>NEXT</Mily>
          </Btnutton>
        </Clear>
      </Footerf>
    </Header>
  );
}
const Mily = styled("p")(() => ({}));
const Header = styled("div")(() => ({
  margin: "0 auto",
  height: "896px",
  backgroundColor: "#D7E1F8",
}));
const Component = styled("div")(() => ({
  padding: "40px 850px ",
}));
const Buttonf = styled("button")(() => ({
  padding: "7px 34px",
  borderRadius: "10px",
}));

const Footerf = styled("div")(() => ({
  width: "1000px",
  height: "568px",
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

const Ping = styled("div")(() => ({
  width: "885px",
  margin: "0px 0 20px 0 ",
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

const Componentr = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "100px",
  justifyContent: "center",
  margin: "80px 0",
}));
const Ifrt = styled("div")(() => ({
  cursor: "pointer",
}));
const Flajok = styled("div")(() => ({}));
const Finput = styled("input")(() => ({
  cursor: "pointer",
  width: "430px",
  height: "130px",
  flexShrink: "0",
  borderRadius: "8px",
  border: "1px solid #D4D0D0",
  textAlign: "start",
  background: "#FFF",
}));
const Puiii = styled("p")(() => ({
  padding: "10px 0 0 0",
  color: "#AFAFAF",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "16px",
}));
