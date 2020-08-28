import React from 'react';
import './subheader.scss';

const SubHeader = ({icon, title}) => {
    return (
        <div className={'subheader'}>
            <div className="subheader__icon">
                <img src={icon} alt={title} />
            </div>
            {title}
        </div>
)
}

export default SubHeader;