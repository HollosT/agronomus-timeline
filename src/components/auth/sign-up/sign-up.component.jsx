import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

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
        <form onSubmit={handleSubmit}>
            <input type="text" required name="userName" value={userName} onChange={handleChange} />
            <input type="email" required name="email" value={email} onChange={handleChange} />
            <input type="password" required name="password" value={password} onChange={handleChange} />
            <button type="submit">Sign Up</button>
        </form>
    )
};

export default SignUp;