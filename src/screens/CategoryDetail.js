import React, { memo, useEffect, useState } from 'react';
import Navbar from '~/components/Navbar';
import CategoryDetail from '~/components/Category/CategoryDetail';
import { byId } from '~/services/swService';
import { categoryListMap } from '~/data/starwars/constants';


const CategoryScreen = ({ match, location }) => {

    const { cat, id } = match.params;
    const existingContent = location && location.state ? location.state : null;
    const [content, setContent] = useState(existingContent);
    const contentMatches = content && content.cat === cat;

    useEffect(() => {
        if (!content || (!contentMatches)) {
            //We cannot check our redux store 
            //because then we would need to parse out each id individually 
            byId(id, cat).then(contentResponse => {
                contentResponse.cat = cat;
                setContent(contentResponse);
            });
        }
    }, [content, id, cat, setContent, contentMatches])

    if (!content || !contentMatches) {
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