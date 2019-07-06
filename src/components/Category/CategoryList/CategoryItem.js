import React, { memo } from 'react';
import { format, parse } from 'date-fns';


export const convertFormat = (dateString, toFormat = 'MM/DD/YYYY') => {
    const parsed = parse(dateString);

    return format(parsed, toFormat);
}

const CategoryItem = ({ item, map }) => {
    const title = item[map.title]
    const name = title[0] + title[1];

    console.log(item.created_at);
    const date = convertFormat(item.created);

    return <div className="cat-item">
        <div className="name-container">
            <div className="name">
                {name.toUpperCase()}
            </div>
        </div>
        <div className="info">
            <h2>{title} <sub>{date}</sub></h2>
            <p>{item[map.description]}</p>
        </div>
    </div>
}


export default memo(CategoryItem);