import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './button.scss';

const Button = ({loading, type, label}) => {
    return (
        <CSSTransition in={!loading} timeout={100} classNames={'btn'}>
            <button type={type} className="btn-default">{label}</button>
        </CSSTransition>
    )
}

export default Button;

