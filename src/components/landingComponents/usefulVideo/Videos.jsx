import React from 'react';

import { MyVideo } from '../../../assets/videos/index';
import { styled } from '@mui/material';

export const Videos = () => {
  return (
    <Container>
      <Title>Useful Video</Title>
      <Menu>
        <Item>
          <Video controls>
            <source
              style={{ borderRadius: '15px 15px 0 0' }}
              src={MyVideo}
              type="video/mp4"
              autoplay
            />
          </Video>
          <Texts>
            <TextName>Test Overview</TextName>
            <Duration>Duration 1:00</Duration>
          </Texts>
        </Item>
        <Item>
          <Video controls>
            <source src={MyVideo} type="video/mp4" autoplay />
          </Video>
          <Texts>
            <TextName>Test Overview</TextName>
            <Duration>Duration 1:00</Duration>
          </Texts>
        </Item>
        <Item>
          <Video controls>
            <source src={MyVideo} type="video/mp4" autoplay />
          </Video>
          <Texts>
            <TextName>Test Overview</TextName>
            <Duration>Duration 1:00</Duration>
          </Texts>
        </Item>
      </Menu>
    </Container>
  );
};

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
}));
const Title = styled('h2')(() => ({}));
const Menu = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
const Item = styled('div')(() => ({
  // background: '#fff'
  width: '23rem',
  borderRadius: '1rem 1rem 0 0',
  overflow: 'hidden',
}));
const Video = styled('video')(() => ({
  width: '100%',
  height: '16rem',
}));
const TextName = styled('p')(() => ({
  color: '#3A10E5',
  fontSize: '1.25rem',
  fontWeight: 700,
  marginBottom: '0.6rem ',
}));
const Duration = styled('p')(() => ({}));
const Texts = styled('div')(() => ({
  backgroundColor: '#fff',
  margin: '-7px 0 0',
  padding: '1.25rem',
  borderRadius: '0 0 1rem 1rem',
  border: '1px solid #DDD',
}));
// const = styled('')(() => ({}));
// const = styled('')(() => ({}));
// const = styled('')(() => ({}));
