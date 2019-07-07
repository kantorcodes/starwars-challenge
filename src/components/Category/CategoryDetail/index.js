
import React from 'react';
import Field from './field';
import PropTypes from 'prop-types';
import "./detail.scss";


const CategoryDetail = ({ content, map }) => {
    const item = {...content};
    const title = item[map.title];
    const description = item[map.description];
    const Abrr = `${title[0]}${title[1]}`.toUpperCase();
    
    delete item[map.description];

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
            {Object.keys(item).map((key) => {
                return <Field key={key} field={item[key]} fieldKey={key} />
            })}
        </div>
    </div>

}

CategoryDetail.propTypes = {
    map: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired
}

export default CategoryDetail;