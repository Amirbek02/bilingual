import React from 'react';
import { EnglishBooks, GlobalPhoto, MessogePhoto, MoneyPhoto } from '../../assets/images';
import { styled } from '@mui/material';
import { Extensive, PhoneIcon, SpeechIcon, Tutoring } from '../../assets/icons';

export const Result = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <img src={MessogePhoto} />
          <Text>Over 10,000 fee waivers for the Bilingual English Test are offered annually.</Text>
        </Item>
        <Item>
          <img src={GlobalPhoto} />
          <Text>Students from over 200 countries and territories have benefitted.</Text>
        </Item>
        <Item>
          <img src={MoneyPhoto} />
          <Text>Eligible students can take the test with absolutely zero cost to them.</Text>
        </Item>
      </Wrapper>
      <UserWrapper>
        <TextsUser>
          <TitleUser>Unparalleled user experience</TitleUser>
          <DescrUser>
            The most effective way to perfect a language is by immersing yourself in it. Rosetta
            Stone for Enterprise delivers an effective end-to-end experience, founded on a wealth of
            carefully structured content. Each learner has the opportunity to balance independent
            study with optional online tutoring in a way that fits their schedule and language
            learning goals.
          </DescrUser>
          <MenuUser>
            <ItemUser>
              <PhoneIcon />
              <ItemUserText>Accessible anytime, anywhere</ItemUserText>
            </ItemUser>
            <ItemUser>
              <Extensive />
              <ItemUserText>Extensive business content</ItemUserText>
            </ItemUser>
            <ItemUser>
              <SpeechIcon />
              <ItemUserText>Leading speech recognition</ItemUserText>
            </ItemUser>
            <ItemUser>
              <Tutoring />
              <ItemUserText>Unlimited live tutoring</ItemUserText>
            </ItemUser>
          </MenuUser>
        </TextsUser>
        <img src={EnglishBooks} style={{ width: '28.80069rem' }} alt="" />
      </UserWrapper>
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
  margin: '7.5rem 0 7.5rem',
}));
const Item = styled('div')(() => ({
  textAlign: 'center',
  marginBottom: '7.5rem',
}));
const Text = styled('p')(() => ({
  width: '335px',
  marginTop: '1.4rem',
}));
const UserWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
const TextsUser = styled('div')(() => ({
  maxWidth: '40rem',
}));
const TitleUser = styled('h3')(() => ({
  color: '#3752B4',
  fontSize: '2.5rem',
  fontWeight: 700,
  width: '23rem',
  marginBottom: '2.12rem',
}));
const DescrUser = styled('p')(() => ({
  color: '#23212A',
  fontSize: '1rem',
  fontWeight: 400,
}));
const MenuUser = styled('ul')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));
const ItemUser = styled('li')(() => ({
  display: 'flex',
  marginTop: '3rem',
}));
const ItemUserText = styled('p')(() => ({
  marginLeft: '1.62rem',
  width: '10rem',
}));
