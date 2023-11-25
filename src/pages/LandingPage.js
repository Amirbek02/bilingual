import React from 'react';
import { Main } from '../components/landingComponents/main/Main';
import { Result } from '../components/landingComponents/main/Result';
import { OurTeam } from '../components/landingComponents/ourTeam/OurTeam';
import { Sliders } from '../components/landingComponents/slider/Slider';
import { Videos } from '../components/landingComponents/usefulVideo/Videos';
import { LearnMore } from '../components/landingComponents/learnMore/LearnMore';
import { Quetion } from '../components/landingComponents/quetions/Quetion';
import { Partners } from '../components/landingComponents/partners/Partners';
import { Footer } from '../components/landingComponents/footer/Footer';

export const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#fef5e8' }}>
      <Main />
      <Result />
      <OurTeam />
      <Sliders />
      <Videos />
      <LearnMore />
      <Quetion />
      <Partners />
      <Footer />
    </div>
  );
};
