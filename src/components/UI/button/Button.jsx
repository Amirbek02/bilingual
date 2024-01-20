import React from 'react';
import { Button as Reusable, styled } from '@mui/material';

export const Button = ({ children, ...rest }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

const ButtonStyle = styled(Reusable)(
  ({ ...props }) => (
    console.log(props.backgroundColor),
    {
      backgroundColor: props.backgroundColor || '#3A10E5',
      color: props.color || '#fff',
      borderRadius: props.borderRadius || '0.5rem',
      display: 'inline-flex',
      padding: props.padding || '0.8125rem 1.5rem',
      alignItems: 'flex-start',
      '&:hover': {
        backgroundColor: props.backgroundColor || '#4E28E8',
        color: props.color,
      },
      '&:active': {
        backgroundColor: props.backgroundColor,
      },
      '&:disabled': {
        backgroundColor: '#B2B2B2',
        color: '#FFFFFF',
      },
      '&.MuiButtonBase-root': {
        textTransform: 'none',
      },
    }
  ),
);
