import React from 'react';

import './button.scss';
import { CSSTransition } from 'react-transition-group';

const Button = ({link, loading}) => {
    return (
        <CSSTransition in={!loading} classNames="portfolio-item__live" timeout={1400}>
            <a href={link} className="portfolio-item__live">
                See Live
            </a>
        </CSSTransition>
    )
}

export default Button;