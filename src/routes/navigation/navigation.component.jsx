import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <nav className="main-navigation">
        <Link to="/">
            <Logo />
            <h5>Agronomus</h5>
        </Link>
        {currentUser ? (<span onClick={signOutUser}>Logout</span>) : (<Link to="/auth">Sign in</Link>)}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
