import { styled } from '@mui/material';
import React from 'react';
import { BooksPhoto, Dashboard, Design, Globe, Search, Security } from '../../../assets/images';

export const LearnMore = () => {
  return (
    <Container>
      <Title>Learn more</Title>
      <Menu>
        <Item style={{ marginBottom: '16rem' }}>
          <Inner>
            <MenuTitle>Expand your applicant pool</MenuTitle>
            <Text>
              Tap into a diverse pool of candidates from 210+ countries and territories of origin,
              who have taken the Bilingual English Test because of its radical accessibility.
            </Text>
          </Inner>
          <Img src={Globe} style={{ marginLeft: '4rem' }} />
        </Item>
        <Item>
          <Img src={Search} />
          <Inner>
            <MenuTitle>Built on the latest assessment sciencee</MenuTitle>
            <Text>
              The Duolingo English Test is a computer adaptive test backed by rigorous research,
              with results that are highly correlated with other major assessments such as the TOEFL
              and the IELTS.
            </Text>
          </Inner>
        </Item>
        <Item>
          <Inner>
            <MenuTitle>Innovative test security</MenuTitle>
            <Text>
              Industry-leading security protocols, individual test proctoring, and computer adaptive
              technology help prevent fraud and cheating and ensure results you can trust.
            </Text>
          </Inner>
          <Img src={Security} />
        </Item>
        <Item>
          <Img src={Dashboard} />
          <Inner>
            <MenuTitle>Convenient results dashboard</MenuTitle>
            <Text>
              Access candidates’ certificates, video interviews, and writing samples through a free
              and secure dashboard. Quickly and easily view applicant data with filtering tools.
            </Text>
          </Inner>
        </Item>
        <Item>
          <Inner>
            <MenuTitle>Secure Design</MenuTitle>
            <Text>
              Adaptive test engine dynamically administers test questions from a database of
              hundreds of thousands of items. Someone would have to take the test more than 1,000
              times to see a question repeated.
            </Text>
          </Inner>
          <Img src={Design} />
        </Item>
      </Menu>
      <Div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="398"
          height="1675"
          viewBox="0 0 398 1675"
          fill="none">
          <path
            d="M198.46 2C74.7011 327.114 391.289 137.776 394 319.697C369.278 485.448 -60.1965 401.285 31.3853 594.128C122.967 786.971 366.248 706.537 361.823 875.976C357.838 1028.53 14.4307 1017.92 4.15825 1170.19C-6.58138 1329.37 533.848 1311.11 242.704 1673"
            stroke="url(#paint0_linear_948_14298)"
            stroke-width="6.18796"
            stroke-dasharray="18.56 18.56"
          />
          <defs>
            <linearGradient
              id="paint0_linear_948_14298"
              x1="206.298"
              y1="3.23618"
              x2="206.298"
              y2="1673"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#00AAFF" />
              <stop offset="0.328125" stop-color="#FF6163" />
              <stop offset="0.682292" stop-color="#A169F7" />
              <stop offset="1" stop-color="#97CF26" />
            </linearGradient>
          </defs>
        </svg>
      </Div>
      <div style={{ position: 'relative', textAlign: 'center', marginTop: '160px' }}>
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
  );
};

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
  position: 'relative',
}));
const Title = styled('h2')(() => ({}));
const Menu = styled('ul')(() => ({}));
const Item = styled('li')(() => ({
  display: 'flex',
  alignItems: 'center',
  '&:not(:last-child)': {
    marginBottom: '8rem',
  },
  '&:nth-child(even)': {
    marginLeft: '20rem',
  },
}));
const Inner = styled('div')(() => ({
  width: '30rem',
}));
const MenuTitle = styled('h4')(() => ({}));
const Text = styled('p')(() => ({}));
const Img = styled('img')(() => ({
  '&:nth-child(even)': {
    marginLeft: '20rem',
  },
}));
const Div = styled('div')(() => ({
  position: 'absolute',
  top: '100px',
  left: '35%',
  zIndex: '-1',
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
  left: '48%',
  zIndex: 99,
}));
