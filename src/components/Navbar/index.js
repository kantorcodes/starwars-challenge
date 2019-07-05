import React from 'react';
import PropTypes from 'prop-types';
import "./navbar.scss";


const Navbar = ({ title }) => {
    return <nav className="nav-bar">
        <h1>{title}</h1>
    </nav>
}


export default Navbar;