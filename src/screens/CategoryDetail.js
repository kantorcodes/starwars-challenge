import React, { memo } from 'react';
import Navbar from '~/components/Navbar';
import CategoryDetail from '~/components/Category/CategoryDetail';


const CategoryScreen = ({ match }) => {

    const title = match.params.cat;
    const id = match.params.id;
    window.document.title = title.toUpperCase();

    return <div className="detail screen">
        <Navbar title={title} />
        <CategoryDetail />
    </div>
}


export default memo(CategoryScreen);