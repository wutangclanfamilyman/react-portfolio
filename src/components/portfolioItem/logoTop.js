import React, { Component } from 'react';
import './logoTop.scss';
export default class LogoTop extends Component {
    render() {

        const {logo, title, bgColor} = this.props;

        return (
            <div className="logo-top" style={{backgroundColor: bgColor}}>
                <img src={logo} alt={title} />
            </div>
        )
    }
}