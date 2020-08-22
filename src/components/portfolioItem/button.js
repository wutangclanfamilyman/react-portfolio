import React, { Component } from 'react';

import './button.scss';

export default class Button extends Component {
    render() {

        const {link, bgColor} = this.props;

        return (
            <a href={link} className="portfolio-item__live" style={{backgroundImage: `linear-gradient(90deg, ${bgColor} 1.48%, #546E89 99.81%)`, boxShadow: `1px 1px 10px ${bgColor}`}}>
                See Live
            </a>
        )
    }
}