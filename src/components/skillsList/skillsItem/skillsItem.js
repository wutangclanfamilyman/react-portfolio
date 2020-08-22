import React, { Component } from 'react';

import './skillsItem.scss';

export default class SkillsItem extends Component {

    render() {

        const {image, label} = this.props;

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
}