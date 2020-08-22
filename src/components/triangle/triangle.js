import React, { Component } from 'react';

import './triangle.scss';

export default class Triangle extends Component {
    render() {

        const {classTriangle} = this.props;

        return (
            <div className={classTriangle}></div>
        )
    }
}
