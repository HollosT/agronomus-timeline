
import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase.utils'

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
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" required onChange={handleChange}/>
                <input type="password" name="password" required onChange={handleChange}/>
                <button type="submit">Sign In</button>
            </form>
    )
};

export default SignIn;