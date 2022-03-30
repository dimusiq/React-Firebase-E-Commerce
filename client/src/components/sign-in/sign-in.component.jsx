import React, { useState } from 'react';
import { useDispatch } from 'react-redux';



import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { 
    googleSignInStart, 
    emailSignInStart 
} from '../../redux/user/user.actions';

import { 
    SignInContainer,
    SignInTitle, 
    ButtonsContainer 
} from './sign-in.styles';


const SignIn = () => {
  const dispatch = useDispatch();
  const googleSignInStartClickHandler = () => dispatch(googleSignInStart());
  const emailSignInStartHandler = (email, password) =>
    dispatch(emailSignInStart({ email, password }));

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStartHandler(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='password'
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStartClickHandler}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;