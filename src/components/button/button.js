import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import './button.scss';

export default class Button extends Component {
    render() {

        const {label, type, loading} = this.props;

        return (
            <CSSTransition in={!loading} timeout={1000} classNames={'btn'}>
                <button type={type} className="btn-default">{label}</button>
            </CSSTransition>
        )
    }
}