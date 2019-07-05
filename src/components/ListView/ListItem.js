import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './list-item.scss';

const ListItem = ({ name, imageKey, suffix = '' }) => {

    const image = require(`~/assets/images/${imageKey}${suffix}.png`);

    return <div className="item">
        <div className="img-container">
            <img src={image} alt={name} />
        </div>
        <p>
            {name}
        </p>
    </div>
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    imageKey: PropTypes.string.isRequired,
    suffix: PropTypes.string
}

export default memo(ListItem);