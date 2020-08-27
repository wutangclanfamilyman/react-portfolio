import React, { Component } from 'react';
import './logoTop.scss';
import { CSSTransition } from 'react-transition-group';
export default class LogoTop extends Component {
    render() {

        const {logo, title, bgColor, loading} = this.props;

        return (
            <CSSTransition in={!loading} classNames="logo-top" timeout={2000}>
                <div className="logo-top" style={{backgroundColor: bgColor}}>
                    <img src={logo} alt={title} />
                </div>
            </CSSTransition>
        )
    }
}