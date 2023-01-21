
import SignIn from "../../components/auth/sign-in/sign-in.component";
// import SignUp from "../../components/auth/sign-up/sign-up.component";

import './auth.styles.scss'

const Auth = () => {
  
 
    return (
        <div className="authentication-container site-width">
            <SignIn />
            {/* <SignUp /> */}
        </div>
    )    
};

export default Auth;