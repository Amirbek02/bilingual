import React from 'react';
import { Header } from '../header/header';
import { styled } from '@mui/material';
import { BooksPhoto, FounPhoto, HatPhoto } from '../../assets/images';

export const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <FounImages src={FounPhoto} />
        <HatImages src={HatPhoto} />
        <MainTitle>Prove your English proficiency today with</MainTitle>
        <Title>BILINGUAL</Title>
        <Text>
          For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and
          confidence they need to speak new languages.
        </Text>
        <div style={{ position: 'relative' }}>
          <Button>To begin</Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="60"
            viewBox="0 0 200 60"
            fill="none">
            <g filter="url(#filter0_i_948_13561)">
              <path
                d="M33.0807 1.40343C11.382 2.58072 0 14.8722 0 27.2757C0 42.3142 1.57597 53.9049 15.9202 58.6981C27.0103 62.4122 55.7134 56.8201 90.3409 56.9742C136.861 57.1704 168.191 59.469 177.661 59.9735C204.73 61.375 210.727 6.71524 175.764 2.67883C144.376 -0.881067 67.8104 -0.446592 33.0807 1.40343Z"
                fill="url(#paint0_linear_948_13561)"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_948_13561"
                x="0"
                y="0"
                width="200"
                height="60"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="-5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.801587 0 0 0 0 0.75 0 0 0 0.68 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_948_13561" />
              </filter>
              <linearGradient
                id="paint0_linear_948_13561"
                x1="100"
                y1="-4.91738e-06"
                x2="97.9969"
                y2="59.9331"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#CB4080" />
                <stop offset="0.275066" stop-color="#C93D7D" />
                <stop offset="0.560069" stop-color="#BD3172" />
                <stop offset="1" stop-color="#AD1E60" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Container>
      <BookImages src={BooksPhoto} />
    </Wrapper>
  );
};

const Wrapper = styled('div')(() => ({
  position: 'relative',
  backgroundColor: '#FCD200;',
  height: '48.625rem',
}));

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
}));
const FounImages = styled('img')(() => ({
  position: 'absolute',
  top: '117px',
  left: '0',
  width: '100%',
  height: '41.3rem',
}));

const HatImages = styled('img')(() => ({
  position: 'absolute',
  top: '189px',
  left: '1047px',
}));
const BookImages = styled('img')(() => ({
  position: 'absolute',
  top: '279px',
  left: '1100px',
}));

const MainTitle = styled('h1')(() => ({
  marginTop: '7rem',
  color: '#43404E',
  fontSize: '3.4rem',
  fontWeight: 700,
  width: '39.6875rem',
  zIndex: 99,
}));
const Title = styled('h2')(() => ({
  fontSize: '3.75rem',
  color: '#C93D7D',
  fontWeight: '900',
}));
const Text = styled('p')(() => ({
  color: '#23212A',
  fontSize: '1.25rem',
  fontWeight: '400',
  width: '48.25rem',
  margin: '1.87rem 0 1.81rem',
}));
const Button = styled('button')(() => ({
  color: '#fff',
  fontSize: '0.875rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  background: 'none',
  border: 'none',
  position: 'absolute',
  top: '30%',
  left: '65px',
  zIndex: 99,
}));
