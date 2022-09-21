import "./sign-in-form.scss"

import FormInput from "../form-input/form-input"

import Button from "../button/button"

import { useState } from "react"

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword, 
} from "../../utils/firebase/firebase"

const defaultformFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const signInwithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)    
    }

    const[formFields, setFormFields] = useState(defaultformFields)
    const { email, password } = formFields

    const resetFormFields= () => {
        setFormFields(defaultformFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields();
        } 
        catch(error) {
            switch(error.code) {
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
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className="sign-in-form">
            <h2>
                Already have an account?
            </h2>
            <p>Sign in below</p>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="btns-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" onClick={signInwithGoogle} type="button">Google sign in</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm