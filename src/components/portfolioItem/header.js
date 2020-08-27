import React, { Component } from 'react';
import Circle from '../circle';
import './header.scss';
import { CSSTransition } from 'react-transition-group';

export default class Header extends Component {

    render() {

        const {title, loading} = this.props;

        return (
            <CSSTransition in={!loading} classNames="portfolio-item__header" timeout={500}>
                <div className="portfolio-item__header">
                    <Circle classCircle={'portfolio-item__header-circle'} />
                    {title}
                </div>
            </CSSTransition>
        )
    }
}