import React from 'react';

import './educationItem.scss';

const EducationItem = ({years, institution, specialty, degree}) => {
    return (
        <li className="education-list__item">
            <div className="education-list__item-years">{years}</div>
            <div className="education-list__item-institution">{institution}</div>
            <div className="education-list__item-specialty">{specialty}</div>
            <div className="education-list__item-degree">{degree}</div>
        </li>
    )
}

export default EducationItem;