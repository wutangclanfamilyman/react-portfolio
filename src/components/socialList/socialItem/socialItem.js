import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import './socialItem.scss';

export default class SocialItem extends Component {
    render() {

        const {title, icon, link, loading } = this.props;

        return (
            <CSSTransition classNames={'social-item'} in={true} timeout={1000}>
                <li className="social-item">
                    <a href={link}>
                        <img src={icon} alt={title} />
                    </a>
                </li>
            </CSSTransition>
        )
    }
}