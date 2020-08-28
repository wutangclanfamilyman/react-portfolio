import React, {Component} from 'react';

import ToggleButton from './toggleButton';
import './leftNavbar.scss';

export default class LeftNavbar extends Component {

    componentDidMount() {
        setTimeout(this.onLoadedNav, 1000);
    }

    onLoadedNav() {
        document.querySelector('.left-navbar').classList.add('left-navbar--loaded')
    }

    render() {

        const {active, onToggleButton} = this.props;
        
        return (
            <div className="left-navbar">
                <ToggleButton active={active} onToggleButton={onToggleButton} />
            </div>
        )
    }
}