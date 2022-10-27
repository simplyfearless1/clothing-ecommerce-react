import { AuthentificationContainer } from "./authentification.styles";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentification = () => {
  return (
    <AuthentificationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthentificationContainer>
  );
};
export default Authentification;
