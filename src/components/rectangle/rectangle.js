import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './rectangle.scss';

const Rectangle = ({classRectangle}) => {
    return (
        <TransitionGroup>
            <CSSTransition in={true} timeout={200} classNames="rectangle">
                <div className={classRectangle}></div>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Rectangle
