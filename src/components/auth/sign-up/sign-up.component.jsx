import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../../UI/form-input/form-input.component";
import Button from '../../UI/button/button.component'

import './sign-up.styles.scss'

const defaultFormFields = {
    userName: "",
    email: "",
    password: ""
}

const SignUp = () => {
   const navigate = useNavigate()

   const [formFields, setFormFields] = useState(defaultFormFields);
   const {email, password, userName} = formFields;

   const resetFormFields = () => {
        setFormFields(defaultFormFields);
        navigate('/')
    };


   const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
    
            console.log(user)
    
            await createUserDocumentFromAuth(user, { userName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else {
                console.log(error);
            }
        }
   }

   const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields(prevState => {
            return {...prevState, [name]: value}
        })
   }

    return (
        <div>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label="Username" type="text" required name="userName" value={userName} onChange={handleChange} />
                <FormInput label="Email address" type="email" required name="email" value={email} onChange={handleChange} />
                <FormInput label="Password (at least 6 characters long)" type="password" required name="password" value={password} onChange={handleChange} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
};

export default SignUp;