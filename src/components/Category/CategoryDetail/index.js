
import React from 'react';
import Field from './field';
import PropTypes from 'prop-types';
import "./detail.scss";


const CategoryDetail = ({ content, map }) => {
    const title = content[map.title];
    const description = content[map.description];
    const Abrr = `${title[0]}${title[1]}`.toUpperCase();
    const {
        films,
        species,
        vehicles,
        starships,
        residents,
        pilots,
        characters,
        homeworld,
        people,
        planets,
        created,
        edited,
        url, ...contentFields } = content;
    
    delete contentFields[map.description];

    return <div className="detail">
        <div className="avatar-box">
            <div className="avatar">
                {Abrr}
            </div>
            <p className="description">
                {description}
            </p>
        </div>
        <div className="fields">
            {Object.keys(contentFields).map((key) => {
                return <Field key={key} field={contentFields[key]} fieldKey={key} />
            })}
        </div>
    </div>

}

CategoryDetail.propTypes = {
    map: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
}

export default CategoryDetail;