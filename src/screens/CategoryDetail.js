import React, { memo, useEffect, useState, setSt } from 'react';
import Navbar from '~/components/Navbar';
import CategoryDetail from '~/components/Category/CategoryDetail';
import { byId } from '~/services/swService';
import { categoryListMap } from '~/data/starwars/constants';


const CategoryScreen = ({ match, location }) => {

    const { cat, id } = match.params;
    const existingContent = location && location.state ? location.state : null;
    const [content, setContent] = useState(existingContent);

    useEffect(() => {
        if (!content) {
            //We cannot check our redux store 
            //because then we would need to parse out each id individually 
            byId(id, cat).then(r => {
                setContent(r);
            });
        }
    }, [content, id, cat, setContent])

    if (!content) {
        return <div>Loading...</div>
    }

    const map = categoryListMap[cat];
    const title = content[map.title]
    window.document.title = title


    return <div className="detail screen">
        <Navbar title={title} />
        <CategoryDetail content={content} map={map} />
    </div>
}


export default memo(CategoryScreen);