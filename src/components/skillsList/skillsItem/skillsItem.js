import React from 'react';

import './skillsItem.scss';

const SkillsItem = ({image, label}) => {
    return (
        <div className="skills-item">
            <img src={image} alt={label} />
            <div className="skills-item__label">
                <span></span>
                {label}
            </div>
        </div>
    )
}

export default SkillsItem;