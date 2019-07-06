import React, { memo } from 'react';
import Banner from '~/components/Banner';
import Navbar from '~/components/Navbar';
import ListView from '~/components/ListView';
import strings from '~/config/strings';


const HomeScreen = ({match}) => {
    const bannerProps = {
        title: strings.banner.title,
        description: strings.banner.description
    }
    return <div className="home">
        <Navbar title="Star Wars Api" />
        <Banner {...bannerProps} />
        <ListView />
    </div>
}


export default memo(HomeScreen);