import React, {Component} from 'react';

import './button.scss';

export default class Button extends Component {
    render() {

        const {label, type} = this.props;

        return (
            <button type={type} className="btn-default">{label}</button>
        )
    }
}