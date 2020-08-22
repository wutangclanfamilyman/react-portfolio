import React, {Component} from 'react';

import './toggleButton.scss';

export default class ToggleButton extends Component {
    render() {

        const {active, onToggleButton} = this.props;
        
        return (
            <div className={active ? 'toggle-btn toggle-btn--active' : 'toggle-btn'} onClick={onToggleButton}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }

} 