import { SignInFormContainer, ButtonsContainer } from "./sign-in-form.styles";

import FormInput from "../form-input/form-input.component";

import Button, { button_types } from "../button/button.component";

import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultformFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const signInwithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect login details");
          break;
        case "auth/user-not-found":
          alert("No user with this email found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInFormContainer>
      <h2>Already have an account?</h2>
      <p>Sign in below</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={button_types.google}
            onClick={signInwithGoogle}
            type="button"
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};
export default SignInForm;
