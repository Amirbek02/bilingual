import { Button, Checkbox, FormControlLabel, TextField, styled } from '@mui/material';
import React from 'react';
import { Logo, GoogleIcon, CloseIcon } from '../assets/icons';

export const SignInPage = () => {
  const [value, setValue] = React.useState();
  const [passwordValue, setPasswordValue] = React.useState();
  const [register, setRegister] = React.useState(false);

  const emailHandle = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const passwordHandle = (e) => {
    console.log(e.target.value);
    setPasswordValue(e.target.value);
  };

  const postSignIn = (e) => {
    e.preventDefault();
    console.log({
      email: value,
      password: passwordValue,
    });
  };

  const handleRegister = () => {
    setRegister((prev) => !prev);
  };

  return (
    <Container>
      <SignInInner>
        <CloseSignIn />
        <Logo style={{ width: '2.8415rem', marginTop: '4.12rem' }} />
        <TitleSignIn>{register ? 'Create an Account' : 'Sign In'}</TitleSignIn>
        <ContainerForm onSubmit={postSignIn}>
          {register && (
            <>
              <Input
                id="outlined-basic"
                style={{ marginBottom: '1.25rem' }}
                label="First name"
                variant="outlined"
              />
              <Input
                id="outlined-basic"
                style={{ marginBottom: '1.25rem' }}
                label="Last name"
                variant="outlined"
              />
            </>
          )}
          <Input
            id="outlined-basic"
            style={{ marginBottom: '1.25rem' }}
            label="Email"
            variant="outlined"
            value={value}
            onChange={emailHandle}
          />
          <Input
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={passwordHandle}
          />
          {register === false && (
            <FormControlLabel
              style={{ color: '#757575' }}
              control={<Checkbox />}
              label="To remember me"
            />
          )}
          <AuthButton type="submit" variant="contained">
            {register ? 'Sign up' : 'Sign In'}
          </AuthButton>
        </ContainerForm>
        <AuthSignIn>
          <GoogleIcon />
          <AuthText>SIGN UP WITH GOOGLE</AuthText>
        </AuthSignIn>
        <AuthSignUpLink>
          {register ? 'ALREADY HAVE AN ACCOUNT?' : "Don't have an account?"}
          <LinkSignUp onClick={handleRegister}> {register ? 'LOG IN' : 'Register'}</LinkSignUp>
        </AuthSignUpLink>
      </SignInInner>
    </Container>
  );
};

const Container = styled('div')({
  height: '100vh',
  background: 'linear-gradient(91deg, #6B0FA9 0.74%, #520FB6 88.41%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContainerForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '31.25rem',
  margin: '0 auto',
});

const SignInInner = styled('div')({
  position: 'relative',
  width: '616px',
  minHeight: '620px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  textAlign: 'center',
});
const TitleSignIn = styled('h3')({
  color: '#4c4859',
  fontFamily: 'Poppins',
  fontSize: '1.5rem',
  fontWeight: '500',
  marginBottom: '2rem',
});

const AuthSignIn = styled('div')({
  border: '1px solid #BDBDBD',
  padding: '0.875rem 1.25rem',
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: '0.5rem',
  margin: '2.13rem 0 1.5rem',
  cursor: 'pointer',
});

const AuthText = styled('p')({
  fontSize: '0.875rem',
  fontWeight: 500,
  marginLeft: '0.5rem',
});

const AuthSignUpLink = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.875rem',
  fontWeight: 500,
  letterSpacing: '0.0175rem',
  textTransform: 'uppercase',
  marginBottom: '3.75rem',
});
const LinkSignUp = styled('div')({
  marginLeft: '4px',
  color: '#3A10E5',
  cursor: 'pointer',
});
const Input = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.5rem',
    '&.Mui-focused fieldset': {
      borderColor: '#3A10E5',
    },
  },
  '& label.Mui-focused': {
    borderColor: '#3A10E5',
  },
});
const AuthButton = styled(Button)({
  backgroundColor: '#3A10E5',
  padding: '0.8125rem 1.5rem',
  fontSize: '1rem',
  fontWeight: 600,
  marginTop: '1.6rem',
});

const CloseSignIn = styled(CloseIcon)({
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  cursor: 'pointer',
});
