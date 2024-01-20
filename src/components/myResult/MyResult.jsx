import React from "react";
import { styled } from "@mui/material";
import { FullLogo } from "../../assets/icons/index";

export const MyResult = (props) => {
  return (
    <Header>
      <Containertitle>
        <Title>
          <FullLogo />
        </Title>
        <Linkterder>
          <Put>TESTS</Put>
          <REsul>MY RESULTS</REsul>
          <Bunnon>LOG OUT</Bunnon>
        </Linkterder>
      </Containertitle>
      <Result>
        <Container>
          <Resultlink>
            <Resulttitle>
              <Font>#</Font>
              <p>Date of Submition</p>
              <p>Test name</p>
              <Bron>Status</Bron>
              <p>Score</p>
            </Resulttitle>
          </Resultlink>
          <Info>
            <Linkul>
              <p>1</p>
              <li>
                08:15
                <br />
                20.11.2021
              </li>
              <li>English advanced test</li>
              <li>Not evaluated</li>
              <li>0</li>
              <img src="" alt="img" />
            </Linkul>
            <Linkul>
              <p>2</p>
              <li>
                08:15
                <br />
                20.11.2021
              </li>
              <li>English advanced test</li>
              <li>Not evaluated</li>
              <li>0</li>
              <img src="" alt="img" />
            </Linkul>
            <Linkul>
              <p>3</p>
              <li>
                08:15
                <br />
                20.11.2021
              </li>
              <li>English advanced test</li>
              <li>Not evaluated</li>
              <li>0</li>
              <img src="" alt="img" />
            </Linkul>
            <Linkul>
              <p>4 </p>
              <li>
                08:15
                <br />
                20.11.2021
              </li>
              <li>English advanced test</li>
              <li>Not evaluated</li>
              <li>0</li>
              <img src="" alt="img" />
            </Linkul>
          </Info>
        </Container>
      </Result>
    </Header>
  );
};
export default MyResult;
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
const Result = styled("div")(() => ({
  background: "#D7E1F8",
  padding: "50px",
  borderRadius: "10px",
  justifyContent: "center",
}));
const Container = styled("div")(() => ({
  margin: "0 165px ",
  padding: "20px",
  width: "1130px",
  height: "653px",
  flexShrink: "0",
  color: "black",
  borderRadius: "20px",
  backgroundColor: "white",
}));
const Resultlink = styled("div")(() => ({}));
const Resulttitle = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "60px",
  color: "black",
  fontFamily: '"Courier New", Courier, monospace',
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  margin: "20px 100px",
  padding: "20px 5px",
  justifyContent: "flex-start",
}));
const Font = styled("p")(() => ({}));
const Bron = styled("p")(() => ({
  margin: "0 75px",
}));
const Info = styled("div")(() => ({}));
const Linkul = styled("div")(() => ({
  margin: "30px 70px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  gap: "20px",
  width: "933px",
  height: "66px",
  flexShrink: "0",
  borderRadius: "8px",
  background: "#fff",
  boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.06)",
}));
// const = styled('')(() => ({}))
