import "./authentification.scss"

import SignUpForm from "../../components/sign-up-form/sign-up-form"
import SignInForm from "../../components/sign-in-form/sign-in-form"

const Authentification = () => {

    return(
        <div className="auth-wrap">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default Authentification