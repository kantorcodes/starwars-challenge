import React, { useEffect, useState } from "react";
import './banner.scss';
import PropTypes from "prop-types";

const Banner = ({ title, description }) => {

    const [ counter, setCounter ] = useState(0);

    const onClick = () => {
        setCounter(counter + 1);
    }


    return <div className="banner">
        <div className="info">
            <p>Counter: {counter}</p>
            <button onClick={onClick}>Click Me</button>
            <h1 data-testid='title'>{title}</h1>
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