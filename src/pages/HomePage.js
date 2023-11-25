import React from 'react';
import { Header } from '../components/homeComponents/header/Header';
import { styled } from '@mui/material';
export const HomePage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
}));
