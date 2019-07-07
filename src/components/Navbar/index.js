import React from 'react';
import PropTypes from 'prop-types';
import getCaret from "~/helpers/caret";
import { withRouter, Link } from 'react-router-dom';
import "./navbar.scss";


const Navbar = ({ title, match, location }) => {
    let caret = getCaret();

    let lastLocation = '/';

    if (location.pathname.includes('detail')) {
        lastLocation = `/categories/${match.params.cat}`;
    }

    return <nav className="nav-bar">
        <div className="nav-container">
            {caret && <p className="logo">
                <Link to={lastLocation}>
                    <img src={caret} alt="nav" />
                </Link>
            </p>}
            <h1>{title}</h1>
        </div>
    </nav>
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default withRouter(Navbar);