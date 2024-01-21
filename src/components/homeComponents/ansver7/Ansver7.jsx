import React from "react";
import { styled } from "@mui/material";
export default function Ansver7() {
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
          <Container>
            <Cliep>
              <p>passage</p>
              <Textt>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </Textt>
            </Cliep>
            <Konponent>
              <Put>
                click and drad text to highlight the answer to the question
                below
              </Put>
              <h3>what did residents think couild happen with new bridge?</h3>
              <Inputler placeholder="Highlight text in the passage to set an answer" />
              <Buttant>NEXT</Buttant>
            </Konponent>
          </Container>
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
  padding: "7px 34px",
  borderRadius: "10px",
}));

const Footerf = styled("div")(() => ({
  width: "1100px",
  height: "608px",
  flexShrink: "0",
  borderRadius: "10px",
  background: "#FFF",
  margin: "0 430px",

  boxShadow: " 0px 4px 39px -5px rgba(196, 196, 196, 0.60)",
}));
const Put = styled("p")(() => ({
  width: "411px",
  height: "64px",
  padding: "0",
  alignItems: "center",

  color: "#4C4859",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "26px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textTransform: "uppercase",
}));
const Clear = styled("div")(() => ({
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
const Container = styled("div")(() => ({
  display: "flex",
}));
const Cliep = styled("div")(() => ({
  width: "555px",
  height: "331px",
  flexShrink: "0",
  borderRadius: "8px",
  border: "1px solid #D4D0D0",

  background: "#FFF",
}));
const Konponent = styled("div")(() => ({
  padding: "0 20px",
  marginBottom: "50px",
  width: "411px",
  color: "#4C4859",
  fontStyle: "normal",
  fontFamily: "DINNextRoundedLTW01-Regular",
}));
const Inputler = styled("input")(() => ({
  padding: "5px 5px",
  width: "411px",
  height: "46px",
  flexShrink: "0",
  borderRadius: "8px",
  border: "1px solid var(--Grey-INPUT, #D4D0D0)",
  background: "#F7F7F7",
}));
const Buttant = styled("button")(() => ({
  margin: "40px 270px ",
  display: "flex",
  width: "143px",
  height: "42px",
  padding: "13px 24px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  flexShrink: "0",
  borderRadius: "8px",
  background: "#C4C4C4",
}));
const Textt = styled("div")(() => ({
  width: "554px",
  height: "1px",
  background: "black",
}));
