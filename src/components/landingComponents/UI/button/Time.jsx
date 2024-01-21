import { styled } from '@mui/material';
import React from 'react';

export const Time = () => {
  return (
    <Container>
      <Times>0:05</Times>
      <Place>
        <BluePlace></BluePlace>
      </Place>
    </Container>
  );
};

const Container = styled('div')(() => ({}));
const Times = styled('div')(() => ({
  color: '#4C4859',
  fontSize: '2rem',
  fontWeight: '500',
}));
const Place = styled('div')(() => ({
  width: '50.81256rem',
  height: '0.5rem',
  background: '#D4D0D0',
  borderRadius: '0.21875rem',
}));
const BluePlace = styled('div')(() => ({
  height: '100%',
  width: '50%',
  background: 'linear-gradient(270deg, #3A10E5 29.37%, #6746EF 84.8%)',
  borderRadius: '0.21875rem',
}));
