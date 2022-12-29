
import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase.utils'
import FormInput from '../../UI/form-input/form-input.component';
import Button from '../../UI/button/button.component'

import './sign-in.component.scss'

const defaultFormFields = {
    email: "",
    password: ""
};

const SignIn = () => {
    const [formData, setFormData] = useState(defaultFormFields); 
    const { email, password } = formData;

    const resetFormFields = () => {
        setFormData(defaultFormFields);
      };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormData(prevState => {
            return {...prevState, [name]: value}
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            
            resetFormFields();
        } catch (error) {
            switch(error.code) {
              case "auth/wrong-password":
                alert('Incorrect password or email')
                break
              case 'auth/user-not-found':
                alert('Could not find user')
                break
              default: 
              console.log(error)
      
            }
          }
    }

    return (
          <div>
              <h2>Already have an account</h2>
              <span>Sign in with your email and password</span>
              
              <form onSubmit={handleSubmit} className="form-container">
                <FormInput label="Email address" type="email" name="email" required onChange={handleChange} value={email}/>
                <FormInput label="Password" type="password" name="password" required onChange={handleChange} value={password}/>
                <Button type="submit">Sign In</Button>
              </form>
          </div>
    )
};

export default SignIn;