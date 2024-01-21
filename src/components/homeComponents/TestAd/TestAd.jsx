import { styled } from '@mui/material';
import React from 'react';
import { Header } from '../header/Header';
import { TestIcon } from '../../../assets/images';

export const TestAd = () => {
  return (
    <>
      <Header />
      <Container>
        <Test>
          <Wrapper>
            <img src={TestIcon} alt="" />
            <div style={{ marginLeft: '2rem' }}>
              <Minut>15 minutes</Minut>
              <Text>English advanced test </Text>
              <Title>Train as much as you like.</Title>
            </div>
          </Wrapper>
          <Button>Button</Button>
        </Test>
      </Container>
    </>
  );
};

const Container = styled('div')(() => ({
  backgroundColor: '#D7E1F8',
  height: '100vh',
  margin: '0 auto',
  padding: '5rem 0 0',
}));
const Test = styled('div')(() => ({
  borderRadius: '0.625rem',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 39px -5px rgba(196, 196, 196, 0.60)',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  width: '53rem',
  margin: '0 auto',
  padding: '4.56rem 4rem 4.56rem 2.3rem',
}));
const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));
const Text = styled('div')(() => ({
  margin: '0.94rem 0',
  color: '#4C4859',
  fontSize: '1.625rem',
  fontWeight: '500',
}));
const Minut = styled('div')(() => ({
  color: '#3A10E5',
  fontSize: '0.9375rem',
  fontWeight: '600',
}));
const Title = styled('div')(() => ({
  fontSize: '1rem',
  color: '#4C4859',
}));
const Button = styled('button')(() => ({
  color: 'var(--Blue-Corporate-color, #3A10E5)',
  fontSize: '0.875rem',
  fontWeight: '700',
  padding: '0.81rem 1.5rem',
  borderRadius: '0.5rem',
  border: '2px solid var(--Blue-Corporate-color, #3A10E5)',
  backgroundColor: '#fff',
  boxShadow: '0px 1px 2px 0px rgba(58, 16, 229, 0.20), 0px 1px 2px 0px rgba(58, 16, 229, 0.20)',
}));
