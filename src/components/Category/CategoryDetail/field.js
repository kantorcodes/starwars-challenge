import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { convertFormat } from '~/helpers/format';
import { Link } from "react-router-dom";

const UrlValue = ({ value }) => {
    const link = value.replace("https://swapi.co/api/", '')
    return <p>
        <Link to={`/detail/${link}`}>
            {`${window.location.hostname}/${link}`}
        </Link>
    </p>
}

const Field = ({ field, fieldKey }) => {

    const label = fieldKey.replace('_', ' ');
    const isArray = Array.isArray(field);

    if (!isArray && (field.toString().includes('https')) || fieldKey === 'url') {
        field = <UrlValue value={field} />
    }
    else if (['created', 'edited'].includes(fieldKey)) {
        field = convertFormat(field);
    }

    return <div className="field">
        <div className="box">
            <div className="values">
                <p className="label">
                    {label}
                </p>
                <div className="value">
                    {isArray ? field.map((value, key) => <UrlValue value={value} key={key} />) : field}
                </div>
            </div>
        </div>
        <div className="divider" />
    </div>
}

Field.propTypes = {
    fieldKey: PropTypes.string.isRequired
}

export default memo(Field);