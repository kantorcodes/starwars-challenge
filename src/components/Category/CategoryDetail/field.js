import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Field = ({ field, fieldKey }) => {

    const label = fieldKey.replace('_', ' ');

    return <div className="field">
        <div className="box">
            <div className="values">
                <p className="label">
                    {label}
                </p>
                <p className="value">
                    {field}
                </p>
            </div>
        </div>
        <div className="divider" />
    </div>
}

Field.propTypes = {
    field: PropTypes.string.isRequired,
    fieldKey: PropTypes.string.isRequired
}

export default memo(Field);