import "./authentification.styles"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"

const Authentification = () => {

    return(
        <div className="auth-wrap">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default Authentification