import React, {Component} from 'react';

import './circle.scss';

export default class Circle extends Component {
    
    render() {

        const {classCircle} = this.props;

        return (
            <div className={classCircle}></div>
        )
    }
}