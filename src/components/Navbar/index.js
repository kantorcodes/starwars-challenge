import React from 'react';
import PropTypes from 'prop-types';
import getCaret from "~/helpers/caret";
import { withRouter } from 'react-router-dom';
import "./navbar.scss";


const Navbar = ({ title, location, history }) => {
    let caret = getCaret();

    return <nav className="nav-bar">
        <div className="nav-container">
            {caret && <p className="logo">
                <button onClick={history.goBack}>
                    <img src={caret} alt="nav" />
                </button>
            </p>}
            <h1>{title}</h1>
        </div>
    </nav>
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default withRouter(Navbar);