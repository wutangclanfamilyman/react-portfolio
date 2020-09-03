import React from 'react';
import Circle from '../circle';
import './header.scss';
import { CSSTransition } from 'react-transition-group';

const Header = ({title, loading}) => {
    return (
        <CSSTransition in={!loading} classNames="portfolio-item__header" timeout={50}>
            <div className="portfolio-item__header">
                <Circle classCircle={'portfolio-item__header-circle'} />
                {title}
            </div>
        </CSSTransition>
    )
}

export default Header;