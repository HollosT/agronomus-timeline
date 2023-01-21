import { Fragment, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user/user.context";

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import "./navigation.styles.scss";

const Navigation = () => {
  const navigate = useNavigate()

  const { currentUser } = useContext(UserContext);

  const signOutHandler =() => {
    signOutUser();
    navigate('/')

  }

  return (
    <Fragment>
      <nav className="main-navigation">
        <Link to="/" className="home-link">
            <h5>Agronomus</h5>
            <Logo />
        </Link>
        <div>
          {currentUser ? (<Link to="/add-new">Add version</Link>) : null}
          {currentUser ? (<span onClick={signOutHandler}>Logout</span>) : (<Link to="/auth">Sign in</Link>)}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
