import React, {memo} from 'react';
import './qoute.scss';

const Qoute = ({text}) => {
    return <div className="qoute">
        <p>
        {text}
        </p>
    </div>
}

export default memo(Qoute);