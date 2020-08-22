import React, {Component} from 'react';
import Circle from '../circle';
import './header.scss';

export default class Header extends Component {
    
    render() {

        const {header} = this.props;

        return (
            <div className="section-header">
                <Circle classCircle={'header-circle'} />
                {header}
            </div>
        )
    }
}