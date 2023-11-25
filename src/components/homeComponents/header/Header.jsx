import React from 'react';
import { styled } from '@mui/material';
import { FullLogo } from '../../../assets/icons';

export const Header = () => {
  return (
    <Container>
      <FullLogo />
      <Wrapper>
        <Test>Tests</Test>
        <Result>My Results</Result>
        <LoginButton type="submit">Login out</LoginButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled('div')(() => ({
  minHeight: '96px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LoginButton = styled('li')(() => ({
  backgroundColor: '#fff',
  padding: '0.8125rem 1.5rem',
  border: '2px solid #4c4859',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: 700,
  marginRight: '1.5rem',
  textTransform: 'uppercase',
  cursor: 'pointer',
  color: 'var(--4C4C4C, #4C4C4C)',
  boxShadow: '0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)',
  '&:hover': {
    backgroundColor: '#3A10E5',
    color: '#fff',
  },
  '&:active': {
    backgroundColor: ' #3007DA;',
  },
  '&.MuiButtonBase-root': {
    textTransform: 'none',
  },
}));

const Test = styled('li')(() => ({
  marginRight: '3.75rem',
  fontSize: '0.9375rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  cursor: 'pointer',
  color: 'var(--Blue-Corporate-color, #3A10E5)',
}));
const Result = styled('li')(() => ({
  marginRight: '3.75rem',
  fontSize: '0.9375rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  cursor: 'pointer',
  color: 'var(--font-color, #4C4859)',
}));
