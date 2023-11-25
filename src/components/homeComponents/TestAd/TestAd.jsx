import { Container, styled } from '@mui/material';
import React from 'react';
import { Header } from '../header/Header';

export const TestAd = () => {
  return (
    <Container>
      <Header />
      <Test></Test>
    </Container>
  );
};

const Test = styled('div')(() => ({}));
