import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './qoute.scss';

const Qoute = ({ text }) => {
    return <div className="qoute">
        <p>
            {text}
        </p>
    </div>
}

Qoute.propTypes = {
    text: PropTypes.string.isRequired
}

export default memo(Qoute);