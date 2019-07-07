import React, { memo, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import CategoryItem from "./CategoryItem";
import getCaret from "~/helpers/caret";
import { useSelector, useDispatch } from 'react-redux'
import { fetchResource } from '~/data/starwars/actions/actions';
import { categoryListMap } from '~/data/starwars/constants';
import './cat-list.scss';

const CategoryList = ({ type }) => {

    const dispatch = useDispatch();

    const data = useSelector(state => {
        return state.space[type.toLowerCase()]
    })

    useEffect(() => {
        if(data.results.length <= 0)
        {
            dispatch(fetchResource(1, type));
        }
    }, [dispatch, type])


    const next = () => dispatch(fetchResource(data.nextPage, type))
    const hasMore = data ? data.results.length < data.count : false
    const map = categoryListMap[type];
    const caret = getCaret();

    const itemProps = {
        map,
        caret,
        type
    }

    return <div className="cat-list">
        <InfiniteScroll
            pageStart={0}
            loadMore={(next)}
            hasMore={hasMore}
        >
            {data.results.map((result, i) => {
                return <CategoryItem {...itemProps} index={i} key={i} item={result} />
            })}
        </InfiniteScroll>
    </div>
}



export default memo(CategoryList);