import React, { memo } from 'react';
import Navbar from '~/components/Navbar';
import CategoryList from '~/components/Category/CategoryList';


const CategoryScreen = ({ match }) => {

    const title = match.params.cat;

    return <div className="category">
        <Navbar title={title} />
        <CategoryList type={title} />
    </div>
}


export default memo(CategoryScreen);