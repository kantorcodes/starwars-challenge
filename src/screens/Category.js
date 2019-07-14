import React, { memo, useEffect } from 'react';
import Navbar from '~/components/Navbar';
import Qoute from '~/components/Qoute';
import CategoryList from '~/components/Category/CategoryList';
import strings from '~/config/strings';


const customInterval = (counter = 0) => {
    setTimeout(() => {
        counter++;
        console.log(counter);
        customInterval(counter);
    },1000)
}

const CategoryScreen = ({ match }) => {

    useEffect(() => {
        customInterval(0);
    })

    const title = match.params.cat;
    window.document.title = title.toUpperCase();

    return <div className="category screen">
        <Navbar title={title} />
        <Qoute text={strings.qoute} />
        <CategoryList type={title} />
    </div>
}


export default memo(CategoryScreen);