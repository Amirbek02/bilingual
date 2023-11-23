import React from 'react';
import { PlusIcon } from '../../assets/icons';
import { styled } from '@mui/material';

export const Footer = () => {
  return (
    <Container>
      <Title>FAQ:</Title>
      <Line></Line>
      <Wrapper>
        <Quetion>What is Bilingual?</Quetion>
        <PlusIcon />
      </Wrapper>
      <Text>
        Please take the test in a separate, quiet room. Close all other windows and close all other
        programs before starting the test. An external USB keyboard or mouse can be used during the
        test. However, when answering test questions, you should only type on one keyboard and use
        one mouse. Don't switch between multiple keyboards or mice.
      </Text>
      <Line></Line>
      <Wrapper>
        <Quetion>How can I show what I am typing during the test?</Quetion>
        <PlusIcon />
      </Wrapper>
      <Text>
        Please take the test in a separate, quiet room. Close all other windows and close all other
        programs before starting the test. An external USB keyboard or mouse can be used during the
        test. However, when answering test questions, you should only type on one keyboard and use
        one mouse. Don't switch between multiple keyboards or mice.
      </Text>
      <Line></Line>
      <Wrapper>
        <Quetion>Why should I take the Bilingual English Test? </Quetion>
        <PlusIcon />
      </Wrapper>
      <Text>
        Please take the test in a separate, quiet room. Close all other windows and close all other
        programs before starting the test. An external USB keyboard or mouse can be used during the
        test. However, when answering test questions, you should only type on one keyboard and use
        one mouse. Don't switch between multiple keyboards or mice.
      </Text>
      <Line></Line>
      <Wrapper>
        <Quetion>How can I make sure my microphone picks up my voice clearly? </Quetion>
        <PlusIcon />
      </Wrapper>
      <Text>
        Please take the test in a separate, quiet room. Close all other windows and close all other
        programs before starting the test. An external USB keyboard or mouse can be used during the
        test. However, when answering test questions, you should only type on one keyboard and use
        one mouse. Don't switch between multiple keyboards or mice.
      </Text>
      <Line></Line>
      <Wrapper>
        <Quetion>How can I allow a test to record my computer's screen? </Quetion>
        <PlusIcon />
      </Wrapper>
      <Text>
        Please take the test in a separate, quiet room. Close all other windows and close all other
        programs before starting the test. An external USB keyboard or mouse can be used during the
        test. However, when answering test questions, you should only type on one keyboard and use
        one mouse. Don't switch between multiple keyboards or mice.
      </Text>
      <Line></Line>
    </Container>
  );
};

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
  backgroundColor: '#262626',
}));
const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
const Quetion = styled('h4')(() => ({
  color: '#fff',
  fontSize: '1.25rem',
  fontWeight: '600',
}));
const Text = styled('p')(() => ({
  color: '#fff',
  fontSize: '1.125rem',
  fontWeight: '300',
}));
const Line = styled('div')(() => ({
  background: 'var(--lines-02, #4A4A4A)',
  height: '0.0625rem',
}));
const Title = styled('h3')(() => ({
  color: '#fff',
}));
// const = styled('')(() => ({}))
// const = styled('')(() => ({}))
