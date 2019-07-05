import React from "react";
import './banner.scss';
import PropTypes from "prop-types";

const Banner = ({ title, description }) => {
    return <div className="banner">
        <div className="info">
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </div>
    </div>
}

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Banner;