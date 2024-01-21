import React from 'react';
// import { Header } from '../components/homeComponents/header/Header';
import { styled } from '@mui/material';
import { Respond } from '../components/homeComponents/Respond/Respond';
export const HomePage = () => {
  return (
    <Container>
      <Respond />
    </Container>
  );
};

const Container = styled('div')(() => ({
  background: '#D7E1F8',
  width: '100%',
  height: '100vh',
}));
