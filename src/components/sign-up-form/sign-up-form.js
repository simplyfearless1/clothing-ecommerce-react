import "./sign-up-form.scss"

import FormInput from "../form-input/form-input"

import Button from "../button/button"

import { useState } from "react"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"

const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const[formFields, setFormFields] = useState(defaultformFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields= () => {
        setFormFields(defaultformFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(password !== confirmPassword ){
            alert("Passwords do not match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserDocumentFromAuth( user, { displayName });
            resetFormFields()
        } 
        catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert("Email already in use, can't create a user");
            }
            else {
                console.log(error)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className="sign-up-form">
            <h2>
                Don't have an account
            </h2>
            <p>Sign up below</p>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm