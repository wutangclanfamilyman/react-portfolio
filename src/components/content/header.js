import React from 'react';
import Circle from '../circle';
import {CSSTransition} from 'react-transition-group';
import './header.scss';

const Header = ({loading, header}) => {
    return (
        <CSSTransition in={!loading} timeout={50} classNames={'header'}>
            <div className="section-header">
                <Circle classCircle={'header-circle'} />
                {header}
            </div>
        </CSSTransition>
    )
}

export default Header;