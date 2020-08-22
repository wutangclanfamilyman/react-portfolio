import React, { Component } from 'react';

import './educationItem.scss';

export default class EducationItem extends Component {
    render() {

        const {years, institution, specialty, degree} = this.props;

        return (
            <li className="education-list__item">
                <div className="education-list__item-years">{years}</div>
                <div className="education-list__item-institution">{institution}</div>
                <div className="education-list__item-specialty">{specialty}</div>
                <div className="education-list__item-degree">{degree}</div>
            </li>
        )
    }
}