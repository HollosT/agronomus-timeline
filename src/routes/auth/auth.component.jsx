import { Fragment } from "react";
import SignIn from "../../components/auth/sign-in/sign-in.component";
import SignUp from "../../components/auth/sign-up/sign-up.component";


const Auth = () => {
    
    return (
        <Fragment>
            <SignIn />
            <SignUp/>
        </Fragment>
    )
};

export default Auth;