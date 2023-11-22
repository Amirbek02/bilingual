import { styled } from '@mui/material';
import React from 'react';
import { Photo1, Photo2, Photo3, Photo4, Photo5, Photo6 } from '../../assets/images';

const mentors = [
  {
    img: Photo1,
    name: 'Alice Archie',
    work: 'Founder Bilingual',
  },
  {
    img: Photo2,
    name: 'Alice Archie',
    work: 'Founder Bilingual',
  },
  {
    img: Photo3,
    name: 'Alice Archie',
    work: 'Founder Bilingual',
  },
  {
    img: Photo4,
    name: 'Alice Archie',
    work: 'Founder Bilingual',
  },
  {
    img: Photo5,
    name: 'Alice Archie',
    work: 'Founder Bilingual',
  },
  {
    img: Photo6,
    name: 'Alice Archie',
    work: 'Founder Bilingual',
  },
];

export const OurTeam = () => {
  return (
    <Container>
      <Title>OurTeam</Title>
      <TeamMenu>
        {mentors.map((mentor) => (
          <TeamItem>
            <Img src={mentor.img} />
            <UserName>{mentor.name}</UserName>
            <UserWork>{mentor.work}</UserWork>
          </TeamItem>
        ))}
      </TeamMenu>
    </Container>
  );
};

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
}));
const Title = styled('h2')(() => ({
  textAlign: 'center',
  color: '#3752B4',
  fontSize: '2.5rem',
  fontWeight: '700',
  margin: '8rem 0 3rem',
}));
const TeamMenu = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
}));
const TeamItem = styled('li')(() => ({
  textAlign: 'center',
  margin: '0.7rem',
}));
const Img = styled('img')(() => ({}));
const UserName = styled('h4')(() => ({
  margin: '0.88rem 0 0.13rem',
  color: '#3A10E5',
  fontSize: '1rem',
}));
const UserWork = styled('p')(() => ({
  color: 'var(--black, #020202)',
  fontSize: '0.875rem',
}));
// const  = styled('')(() => ({}))
