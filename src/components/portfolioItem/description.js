import React from 'react';

import './description.scss';
import { CSSTransition } from 'react-transition-group';

const Description = ({done, about, loading}) => {
    return (
        <CSSTransition in={!loading} timeout={100} classNames="portfolio-item__description">
            <div className="portfolio-item__description">
                <div className="portfolio-item__done">{done}</div>
                <div className="portfolio-item__about">{about}</div>
            </div>
        </CSSTransition>
    )
}

export default Description;