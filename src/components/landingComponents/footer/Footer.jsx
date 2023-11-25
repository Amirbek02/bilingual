import React from 'react';
import { PlusIcon, UnionIcon } from '../../../assets/icons';
import { styled } from '@mui/material';

export const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  return (
    <Container>
      <ContainerInner>
        <Title>FAQ:</Title>
        <Line></Line>
        <Wrapper>
          <Quetion>What is Bilingual?</Quetion>
          {open ? <UnionIcon onClick={handleClick} /> : <PlusIcon onClick={handleClick} />}
        </Wrapper>
        {open && (
          <Text>
            Please take the test in a separate, quiet room. Close all other windows and close all
            other programs before starting the test. An external USB keyboard or mouse can be used
            during the test. However, when answering test questions, you should only type on one
            keyboard and use one mouse. Don't switch between multiple keyboards or mice.
          </Text>
        )}
        <Line></Line>
        <Wrapper>
          <Quetion>How can I show what I am typing during the test?</Quetion>
          {open1 ? <UnionIcon onClick={handleClick1} /> : <PlusIcon onClick={handleClick1} />}
        </Wrapper>
        {open1 && (
          <Text>
            Please take the test in a separate, quiet room. Close all other windows and close all
            other programs before starting the test. An external USB keyboard or mouse can be used
            during the test. However, when answering test questions, you should only type on one
            keyboard and use one mouse. Don't switch between multiple keyboards or mice.
          </Text>
        )}
        <Line></Line>
        <Wrapper>
          <Quetion>Why should I take the Bilingual English Test? </Quetion>
          {open2 ? <UnionIcon onClick={handleClick2} /> : <PlusIcon onClick={handleClick2} />}
        </Wrapper>
        {open2 && (
          <Text>
            Please take the test in a separate, quiet room. Close all other windows and close all
            other programs before starting the test. An external USB keyboard or mouse can be used
            during the test. However, when answering test questions, you should only type on one
            keyboard and use one mouse. Don't switch between multiple keyboards or mice.
          </Text>
        )}
        <Line></Line>
        <Wrapper>
          <Quetion>How can I make sure my microphone picks up my voice clearly? </Quetion>
          {open3 ? <UnionIcon onClick={handleClick3} /> : <PlusIcon onClick={handleClick3} />}
        </Wrapper>
        {open3 && (
          <Text>
            Please take the test in a separate, quiet room. Close all other windows and close all
            other programs before starting the test. An external USB keyboard or mouse can be used
            during the test. However, when answering test questions, you should only type on one
            keyboard and use one mouse. Don't switch between multiple keyboards or mice.
          </Text>
        )}
        <Line></Line>
        <Wrapper>
          <Quetion>How can I allow a test to record my computer's screen? </Quetion>
          {open4 ? <UnionIcon onClick={handleClick4} /> : <PlusIcon onClick={handleClick4} />}
        </Wrapper>
        {open4 && (
          <Text>
            Please take the test in a separate, quiet room. Close all other windows and close all
            other programs before starting the test. An external USB keyboard or mouse can be used
            during the test. However, when answering test questions, you should only type on one
            keyboard and use one mouse. Don't switch between multiple keyboards or mice.
          </Text>
        )}
        <Line></Line>
      </ContainerInner>
    </Container>
  );
};

const ContainerInner = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
  paddingTop: '7.5rem',
}));
const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
const Quetion = styled('h4')(() => ({
  color: '#fff',
  fontSize: '1.25rem',
  fontWeight: '600',
  margin: '2.13rem 0',
}));
const Text = styled('p')(() => ({
  color: '#fff',
  fontSize: '1.125rem',
  fontWeight: '300',
  marginBottom: '2.12rem',
}));
const Line = styled('div')(() => ({
  background: 'var(--lines-02, #4A4A4A)',
  height: '0.0625rem',
}));
const Title = styled('h3')(() => ({
  color: '#fff',
  marginBottom: '2.38rem',
}));
const Container = styled('div')(() => ({
  backgroundColor: '#262626',
}));
// const = styled('')(() => ({}))
