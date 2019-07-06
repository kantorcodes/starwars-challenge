import React from "react";
import items from "./items";
import ListItem from "./ListItem";
import withMobile from "~/components/Utils/withMobile";
import "./list-view.scss";

const ListView = (props) => {
    const { isMobile, currentWidth } = props;

    let suffix = '@3x';
    if (isMobile && currentWidth > 600) {
        suffix = '@2x';
    }
    else {
        suffix = '';
    }
    const image = require(`~/assets/images/ensigns${suffix}.png`);

    return <div className="list-view" >
        {items.map((item) => <ListItem key={item.imageKey} {...item} suffix={suffix} />)}
        <p className="ensigns">
            <img src={image} alt="ensigns" />
        </p>
    </div>
}
export default withMobile(ListView);