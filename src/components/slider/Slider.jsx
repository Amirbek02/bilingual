import React from 'react';
import { Globus } from '../../assets/images';
import { styled } from '@mui/material';

export const Sliders = () => {
  return (
    <Container>
      <Title>Check out each question type</Title>
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
    </Container>
  );
};

const Container = styled('div')(() => ({}));
const Title = styled('h2')(() => ({}));
const Wrapper = styled('div')(() => ({}));
const SliderTitle = styled('h4')(() => ({}));
const SliderText = styled('p')(() => ({}));
const Img = styled('img')(() => ({}));
const Slider = styled('div')(() => ({}));
// const = styled('')(() => ({}))
