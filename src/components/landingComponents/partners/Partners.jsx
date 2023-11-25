import { styled } from '@mui/material';
import React from 'react';
import { Adama, Bas, Dekalb, Donit, Lidea } from '../../../assets/images';

export const Partners = () => {
  return (
    <Container>
      <Title>Partners</Title>
      <Menu>
        <Item>
          <Img src={Donit} />
        </Item>
        <Item>
          <Img src={Bas} />
        </Item>
        <Item>
          <Img src={Lidea} />
        </Item>
        <Item>
          <Img src={Adama} />
        </Item>
        <Item>
          <Img src={Dekalb} />
        </Item>
        <Item>
          <Img src={Bas} />
        </Item>
      </Menu>
    </Container>
  );
};

const Container = styled('div')(() => ({
  marginBottom: '7.5rem',
}));

const Title = styled('h2')(() => ({}));
const Menu = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
const Item = styled('li')(() => ({
  backgroundColor: '#fff',
  padding: '1.25rem 2.5rem',
  borderRadius: '1.25rem',
  '&:not(:last-child)': {
    marginRight: '1.88rem',
  },
}));
const Img = styled('img')(() => ({}));
// const = styled('')(() => ({}))
// const = styled('')(() => ({}))
