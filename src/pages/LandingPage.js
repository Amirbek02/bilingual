import React from 'react';
import { Main } from '../components/main/Main';
import { Result } from '../components/main/Result';
import { OurTeam } from '../components/ourTeam/OurTeam';
import { Sliders } from '../components/slider/Slider';

export const LandingPage = () => {
  return (
    <div>
      <Main />
      <Result />
      <OurTeam />
      <Sliders />
    </div>
  );
};
