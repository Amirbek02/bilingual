import React from 'react';
import { GlobalPhoto, MessogePhoto, MoneyPhoto } from '../../assets/images';
import { styled } from '@mui/material';

export const Result = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <Img src={MessogePhoto} />
          <Text>Over 10,000 fee waivers for the Bilingual English Test are offered annually.</Text>
        </Item>
        <Item>
          <Img src={GlobalPhoto} />
          <Text>Students from over 200 countries and territories have benefitted.</Text>
        </Item>
        <Item>
          <Img src={MoneyPhoto} />
          <Text>Eligible students can take the test with absolutely zero cost to them.</Text>
        </Item>
      </Wrapper>
    </Container>
  );
};

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
}));
const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '7.5rem 0',
}));
const Item = styled('div')(() => ({
  textAlign: 'center',
}));
const Img = styled('img')(() => ({}));
const Text = styled('p')(() => ({
  width: '335px',
}));
