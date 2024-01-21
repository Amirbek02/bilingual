import { styled } from '@mui/material';
import React from 'react';
import { Time } from '../../landingComponents/UI/button/Time';

export const Respond = () => {
  const [counter, setCounter] = React.useState(0);

  const inputFunction = (e) => {
    setCounter(e.target.value.length);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1.35rem 2.5rem 0 0' }}>
        <Buttons>Quit Test</Buttons>
      </div>
      <Container>
        <ContainerInner>
          <Time />
          <Title>Respond to the question in at least 50 words</Title>
          <Wrapper>
            <Text>“Describe a time you were surprised. what happened?”</Text>
            <div>
              <InputContainer>
                <Input
                  type="text"
                  onChange={(e) => inputFunction(e)}
                  placeholder=" Your response"
                />
              </InputContainer>
              <Counter style={counter >= 10 ? { color: '#3A10E5' } : { color: '#AFAFAF' }}>
                Word: {counter}
              </Counter>
            </div>
          </Wrapper>
          <Line></Line>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
            <Button>Next</Button>
          </div>
        </ContainerInner>
      </Container>
    </>
  );
};
const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
}));
const Buttons = styled('div')(() => ({
  backgroundColor: '#fff',
  borderRadius: '0.5rem',
  border: '2px solid #4C4859',
  boxShadow: '0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)',
  textTransform: 'uppercase',
  padding: '0.8rem 2rem',
  fontWeight: '700',
}));
const ContainerInner = styled('div')(() => ({
  backgroundColor: '#fff',
  width: '56rem',
  height: '36rem',
  borderRadius: '0.625rem',
  padding: '2.5rem',
}));
const Title = styled('h3')(() => ({
  color: '#4C4859',
  fontSize: '1.65rem',
  fontWeight: '500',
  margin: '3.12rem',
  textAlign: 'center',
}));
const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
}));
const Text = styled('p')(() => ({
  marginRight: '1rem',
}));
const Input = styled('input')(() => ({
  backgroundColor: '#fff',
  border: 'none',
  padding: '15px 10px',
  '&:focus': {
    outline: 'none',
  },
}));

const InputContainer = styled('div')(() => ({
  width: '23rem',
  height: '11rem',
  border: '1px solid #D4D0D0',
  borderRadius: '0.5rem',
}));

const Line = styled('div')(() => ({
  width: '50.875rem',
  height: '0.09563rem',
  backgroundColor: '#D4D0D0',
  marginTop: '2.5rem',
}));

const Button = styled('div')(() => ({
  padding: '0.8rem 3rem',
  textTransform: 'uppercase',
  backgroundColor: '#C4C4C4',
  borderRadius: ' 0.5rem',
  color: '#FFF',
  fontWeight: '500',
  boxShadow: '0px 1px 2px 0px rgba(196, 196, 196, 0.20), 0px 1px 2px 0px rgba(196, 196, 196, 0.20)',
}));
const Counter = styled('div')(() => ({
  color: '#AFAFAF',
  marginTop: '5px',
}));
