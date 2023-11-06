// import { SignInPage } from './pages/SignInPage';

import { styled } from '@mui/material';
import { LandingPage } from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;

const Container = styled('div')(() => ({
  maxWidth: '1440px',
  margin: '0 auto',
}));
