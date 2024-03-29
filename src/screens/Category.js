import React, { memo } from 'react';
import Navbar from '~/components/Navbar';
import Qoute from '~/components/Qoute';
import CategoryList from '~/components/Category/CategoryList';
import strings from '~/config/strings';


const CategoryScreen = ({ match }) => {

    const title = match.params.cat;
    window.document.title = title.toUpperCase();

    return <div className="category screen">
        <Navbar title={title} />
        <Qoute text={strings.qoute} />
        <CategoryList type={title} />
    </div>
}


export default memo(CategoryScreen);