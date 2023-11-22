import React from 'react';
import { Globus, LeftIcon, RightIcon } from '../../assets/images';
import { styled } from '@mui/material';

export const Sliders = () => {
  return (
    <Container>
      <Title>Check out each question type</Title>
      <InnerContainer>
        <Wrapper>
          <Slider>
            <SliderTitle>Confirm your English proficiency today!</SliderTitle>
            <SliderText>
              For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and
              confidence they need to speak new languages.
            </SliderText>
          </Slider>
          <Img src={Globus} alt="" />
        </Wrapper>
      </InnerContainer>
      <Scroll>
        <IconLeft>
          <img src={LeftIcon} alt="" />
        </IconLeft>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="30"
          viewBox="0 0 70 30"
          fill="none">
          <rect width="6" height="30" rx="3" transform="matrix(1 0 0 -1 32 30)" fill="#3A10E5" />
          <rect
            width="6"
            height="16"
            rx="3"
            transform="matrix(1 0 0 -1 48 30)"
            fill="#3A10E5"
            fill-opacity="0.2"
          />
          <rect
            width="6"
            height="16"
            rx="3"
            transform="matrix(1 0 0 -1 64 30)"
            fill="#3A10E5"
            fill-opacity="0.2"
          />
          <rect
            width="6"
            height="16"
            rx="3"
            transform="matrix(1 0 0 -1 16 30)"
            fill="#3A10E5"
            fill-opacity="0.2"
          />
          <rect
            width="6"
            height="16"
            rx="3"
            transform="matrix(1 0 0 -1 0 30)"
            fill="#3A10E5"
            fill-opacity="0.2"
          />
        </svg>
        <IconRight>
          <img src={RightIcon} alt="" />
        </IconRight>
      </Scroll>
    </Container>
  );
};

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
}));
const Title = styled('h2')(() => ({}));

const Wrapper = styled('div')(() => ({
  width: '65rem',
  height: '27rem',
  borderRadius: '4.375rem 4.375rem 4.375rem 0rem',
  backgroundColor: '#212629',
  boxShadow: '16px 16px 20px 0px rgba(0, 0, 0, 0.30)',
  display: 'flex',
  padding: '2.88rem 2.75rem',
}));
const SliderTitle = styled('h4')(() => ({
  width: '31rem',
  color: '#FE9102',
  fontSize: '2.375rem',
  fontWeight: '700',
}));
const SliderText = styled('p')(() => ({
  width: '36rem',
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: '400',
  margin: '1.6rem 2.6rem 0 0',
}));
const Img = styled('img')(() => ({}));
const Slider = styled('div')(() => ({}));
const InnerContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
const Scroll = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
const IconLeft = styled('div')(() => ({
  border: '1px solid #3A10E5',
  borderRadius: '50%',
  padding: '1.34rem',
  display: 'flex',
  margin: '2.5rem',
  '&:hover': {
    backgroundColor: '#3A10E5',
  },
}));
const IconRight = styled('div')(() => ({
  border: '1px solid #3A10E5',
  borderRadius: '50%',
  padding: '1.34rem',
  margin: '2.5rem',
  display: 'flex',
  '&:hover': {
    backgroundColor: '#3A10E5',
  },
}));
// const = styled('')(() => ({}))
// const = styled('')(() => ({}))
