import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { convertFormat } from '~/helpers/format';
import { getName } from '~/helpers/name';
import LinesEllipsis from 'react-lines-ellipsis'


const CategoryItem = ({ item, type, map, caret }) => {
    const title = item[map.title]
    const name = getName(title);
    const date = convertFormat(item.created);
    const regex = /(\d+)/g
    const id = item.url.match(regex)
    const link = `/detail/${type}/${id[0]}`

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
                <Link to={{
                    pathname: link,
                    state: item
                }}>
                    <img src={caret} alt='caret' />
                </Link>
            </div>

        </div>
    </div>
}


export default memo(CategoryItem);