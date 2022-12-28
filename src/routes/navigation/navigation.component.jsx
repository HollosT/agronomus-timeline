import { Fragment } from "react";
import { Outlet, Link } from 'react-router-dom'; 

import './navigation.styles.scss'


const Navigation = () => {

    return (
        <Fragment>
            <nav className="main-navigation">
                <Link to='/'>Agronomus</Link>
                <Link to='/auth'>Sign in / Sign Out</Link>

            </nav>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;