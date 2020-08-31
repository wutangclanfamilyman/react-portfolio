import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './link.scss';

const LinkBtn = ({loading, link, label}) => {
    return (
        <CSSTransition in={!loading} timeout={1000} classNames={'link'}>
            <a href={link} className="link-default">{label}</a>
        </CSSTransition>
    )
}

export default LinkBtn;

