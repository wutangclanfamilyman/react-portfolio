import React from 'react';
import './logoTop.scss';
import { CSSTransition } from 'react-transition-group';

const LogoTop = ({logo, title, bgColor, loading}) => {
    return (
        <CSSTransition in={!loading} classNames="logo-top" timeout={2000}>
            <div className="logo-top" style={{backgroundColor: bgColor}}>
                <img src={logo} alt={title} />
            </div>
        </CSSTransition>
    )
}

export default LogoTop;