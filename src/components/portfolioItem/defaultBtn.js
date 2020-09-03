import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './defaultBtn.scss';

const DefaultBtn = ({label, loading}) => {
    return (
        <CSSTransition in={!loading} timeout={100} classNames={'link'}>
            <button disabled={true} className="btn-default">{label}</button>
        </CSSTransition>
    )
}

export default DefaultBtn;