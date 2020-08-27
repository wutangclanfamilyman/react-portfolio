import React, { Component } from 'react';

import './description.scss';
import { CSSTransition } from 'react-transition-group';

export default class Description extends Component {
    
    render() {

        const {done, about, loading} = this.props;

        return (
            <CSSTransition in={!loading} timeout={1000} classNames="portfolio-item__description">
                <div className="portfolio-item__description">
                    <div className="portfolio-item__done">{done}</div>
                    <div className="portfolio-item__about">{about}</div>
                </div>
            </CSSTransition>
        )
    }
}