import React, { memo } from 'react';
import { format, parse } from 'date-fns';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis'


export const convertFormat = (dateString, toFormat = 'MM/DD/YYYY') => {
    const parsed = parse(dateString);
    return format(parsed, toFormat);
}

const CategoryItem = ({ item, type, index, map, caret }) => {
    const title = item[map.title]
    const name = title[0] + title[1];
    const date = convertFormat(item.created);
    const link = `/detail/${type}/${index}`

    return <div className="cat-item">
        <div className="name-container">
            <div className="name">
                {name.toUpperCase()}
            </div>
        </div>
        <div className="info">
            <h2>{title} <sub>{date}</sub></h2>
            <div className="description">
                <LinesEllipsis
                    text={item[map.description]}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='words'
                    className="text"
                />
                <Link to={link}>
                    <img src={caret} alt='caret' />
                </Link>
            </div>

        </div>
    </div>
}


export default memo(CategoryItem);