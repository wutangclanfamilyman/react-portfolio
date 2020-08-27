import React, { Component } from 'react';

import './button.scss';
import { CSSTransition } from 'react-transition-group';

export default class Button extends Component {
    render() {

        const {link, bgColor, loading} = this.props;

        return (
            <CSSTransition in={!loading} classNames="portfolio-item__live" timeout={1400}>
                <a href={link} className="portfolio-item__live">
                    See Live
                </a>
            </CSSTransition>
        )
    }
}