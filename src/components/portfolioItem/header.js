import React, { Component } from 'react';
import Circle from '../circle';
import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="portfolio-item__header">
                <Circle classCircle={'portfolio-item__header-circle'} />
                {this.props.title}
            </div>
        )
    }
}