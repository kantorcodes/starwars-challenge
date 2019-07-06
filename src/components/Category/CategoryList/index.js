import React, { memo, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CategoryItem from "./CategoryItem";
import { useSelector, useDispatch } from 'react-redux'
import { fetchResource } from '~/data/starwars/actions/actions';
import {categoryListMap} from '~/data/starwars/constants';
import './cat-list.scss';

const CategoryList = ({ type }) => {

    const dispatch = useDispatch();
    const data = useSelector(state => {
        return state.space[type.toLowerCase()]
    })

    useEffect(() => {
        dispatch(fetchResource(1, type));
    }, [dispatch, type])

    if (!data) {
        return <div>Loading...</div>
    }

    const hasMore = data ? data.results.length < data.count : false
    const map = categoryListMap[type];

    return <div className="cat-list">
        <InfiniteScroll
            dataLength={data.count}
            hasMore={hasMore}
            loader={<div> Loading...</div>}
        >
            {data.results.map((result, i) => {
                return <CategoryItem key={i} map={map} item={result} />
            })}
        </InfiniteScroll>
    </div>
}



export default CategoryList;