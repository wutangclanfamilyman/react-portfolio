import React, {Component} from 'react';
import './socialItem.scss';

export default class SocialItem extends Component {
    render() {

        const {title, icon, link} = this.props;

        return (
                <li className="social-item">
                    <a href={`${link}`}>
                        <img src={icon} alt={title} />
                    </a>
                </li>
        )
    }
}