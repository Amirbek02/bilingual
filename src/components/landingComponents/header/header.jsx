import React from 'react';
import { styled } from '@mui/material';
import { FullLogo } from '../../../assets/icons';

export const Header = () => {
  return (
    <Wrapper>
      <FullLogo />
      <div>
        <LoginButton type="submit">TO COME IN</LoginButton>
        <RegisterButton type="submit">Register</RegisterButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled('div')(() => ({
  minHeight: '96px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const LoginButton = styled('button')(({ theme }) => ({
  boxShadow: '0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)',
  color: '#fff',
  backgroundColor: theme.palette.primary.main,
  padding: '0.8125rem 1.5rem',
  border: 'none',
  borderRadius: '0.5rem',
  display: 'inline-flex',
  alignItems: 'flex-start',
  fontSize: '0.875rem',
  fontWeight: 400,
  marginRight: '1.5rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#4E28E8',
  },
  '&:active': {
    backgroundColor: ' #3007DA;',
  },
  '&.MuiButtonBase-root': {
    textTransform: 'none',
  },
}));

const RegisterButton = styled('button')(({ theme }) => ({
  color: '#4C4C4C',
  backgroundColor: '#fff',
  padding: '0.8125rem 1.5rem',
  border: 'none',
  borderRadius: '0.5rem',
  display: 'inline-flex',
  alignItems: 'flex-start',
  fontSize: '0.875rem',
  fontWeight: 400,
  textTransform: 'uppercase',
  cursor: 'pointer',
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
