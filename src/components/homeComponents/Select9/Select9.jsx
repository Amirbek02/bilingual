import { styled } from "@mui/material";
import React from "react";

export const Select9 = () => {
  return (
    <div
      style={{
        height: "897px",
        background: "var(--background, #D7E1F8)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1.35rem 2.5rem 0 0",
        }}
      >
        <Buttons>Quit Test</Buttons>
      </div>
      <Container>
        <ContainerInner>
          <Title>5:05</Title>
          <Imager>
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
          </Imager>
          <Component>
            <Draiver>
              <Put>passage</Put>
              <Comp>
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
              </Comp>
            </Draiver>
            <Texty>
              <Textt>
                <p>select the best title for the passage</p>
              </Textt>
              <Knopka>
                <Radio type="radio" />
                <p>The Village’s Growth</p>
              </Knopka>
              <Knopka>
                <Radio type="radio" />
                <p>The Architect’s Bridge</p>
              </Knopka>
              <Knopka>
                <Radio type="radio" />
                <p>Designing Bridge</p>
              </Knopka>
              <Knopka>
                <Radio type="radio" />
                <p>The New Bridge</p>
              </Knopka>
              <Buttoncl>NEXT</Buttoncl>
            </Texty>
          </Component>
        </ContainerInner>
      </Container>
    </div>
  );
};
export default Select9;
const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
}));
const Buttons = styled("div")(() => ({
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
  border: "2px solid #4C4859",
  boxShadow:
    "0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)",
  textTransform: "uppercase",
  padding: "0.8rem 2rem",
  fontWeight: "700",
}));
const ContainerInner = styled("div")(() => ({
  backgroundColor: "#fff",
  width: "56rem",
  height: "40rem",
  borderRadius: "0.625rem",
  padding: "20px",
  border: "1px solid black",
}));
const Title = styled("h3")(() => ({
  color: "#4C4859",
  fontSize: "1.65rem",
  fontWeight: "500",
}));

const Texty = styled("div")(() => ({
  margin: "0 10px",
}));

const Comp = styled("p")(() => ({
  width: "420px",
  height: "1px",
  background: "#D4D0D0",
  margin: "10px",
  marginBottom: "10px",
  color: "var(--4C4859, #4C4859)",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "140%",
  letterSpacing: "0.16px",
  textTransform: "uppercase",
}));

const Draiver = styled("div")(() => ({
  width: "440px",
  height: "431px",
  flexShrink: "0",
  borderRadius: "8px",
  border: "1px solid #D4D0D0",

  background: "#FFF",
  color: "black",
  fontFamily: "DINNextRoundedLTW04-Medium",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "124%",
  textTransform: "uppercase",
}));
const Component = styled("div")(() => ({
  display: "flex",
  margin: "50px 0",
}));
const Imager = styled("div")(() => ({}));

const Put = styled("p")(() => ({
  margin: "10px",
}));
const Textt = styled("div")(() => ({
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontSize: "26px ",
  fontStyle: "normal",
  fontWeight: "400",
}));
const Knopka = styled("div")(() => ({
  display: "flex",
  width: "411px",
  height: "auto",
  border: "1px solid black",
  borderRadius: "10px",
  margin: "20px 0",
  padding: "10px 0 ",
}));
const Radio = styled("input")(() => ({
  margin: "10px",
}));
const Buttoncl = styled("button")(() => ({
  padding: "7px 14px ",
  borderRadius: "10px ",
}));
