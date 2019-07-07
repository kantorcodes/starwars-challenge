import React from "react";
import items from "./items";
import ListItem from "./ListItem";
import screenSuffix from '~/helpers/screenSuffix';
import "./list-view.scss";

const ListView = (props) => {
    const suffix = screenSuffix();

    const image = require(`~/assets/images/ensigns${suffix}.png`);

    return <div className="list-view" >
        {items.map((item) => <ListItem key={item.imageKey} {...item} suffix={suffix} />)}
        <p className="ensigns">
            <img src={image} alt="ensigns" />
        </p>
    </div>
}
export default ListView;