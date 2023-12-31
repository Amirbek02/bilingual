import React from 'react';
import { Main } from '../components/main/Main';
import { Result } from '../components/main/Result';
import { OurTeam } from '../components/ourTeam/OurTeam';
import { Sliders } from '../components/slider/Slider';
import { Videos } from '../components/usefulVideo/Videos';
import { LearnMore } from '../components/learnMore/LearnMore';
import { Quetion } from '../components/quetions/Quetion';
import { Partners } from '../components/partners/Partners';
import { Footer } from '../components/footer/Footer';

export const LandingPage = () => {
  return (
    <div>
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
