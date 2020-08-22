import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './socialItem.scss';

export default class SocialItem extends Component {
    render() {

        const {title, icon, link } = this.props;

        return (
            <li className="social-item">
                <a href={link}>
                    <img src={icon} alt={title} />
                </a>
            </li>
        )
    }
}