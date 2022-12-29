import { Fragment, useState } from "react";
import SignIn from "../../components/auth/sign-in/sign-in.component";
import SignUp from "../../components/auth/sign-up/sign-up.component";

import './auth.styles.scss'

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(false);


    
    const handleClick = () => {
        setIsSignIn(prevState => {
            return prevState = !prevState
        })
    }
 
    return (
        <Fragment>
            {isSignIn ? <SignIn /> : <SignUp /> }
            <p className="auth-caption">Or <span onClick={handleClick}>{isSignIn ? 'sign up' : 'sing in'}</span> instead</p>
        </Fragment>
    )    
};

export default Auth;