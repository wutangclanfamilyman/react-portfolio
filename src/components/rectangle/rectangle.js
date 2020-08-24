import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './rectangle.scss';

export default class Rectangle extends Component {

    render() {

        const {classRectangle} = this.props;

        return (
            <TransitionGroup>
                <CSSTransition in={true} timeout={200} classNames="rectangle">
                    <div className={classRectangle}></div>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}