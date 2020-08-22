import React, { Component } from 'react';

import './description.scss';

export default class Description extends Component {
    render() {
        return (
            <div className="portfolio-item__description">
                <div className="portfolio-item__done">{this.props.done}</div>
                <div className="portfolio-item__about">{this.props.about}</div>
            </div>
        )
    }
}