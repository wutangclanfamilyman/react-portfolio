import React, {Component} from 'react';

import './subheader.scss';

export default class SubHeader extends Component {
    render() {

        const {icon, title} = this.props;

        return (
            <div className="subheader">
                <div className="subheader__icon">
                    <img src={icon} alt={title} />
                </div>
                {title}
            </div>
        )
    }
}