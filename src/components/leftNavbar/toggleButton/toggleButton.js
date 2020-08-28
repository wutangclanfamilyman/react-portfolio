import React from 'react';

import './toggleButton.scss';

const ToggleButton = ({active, onToggleButton}) => {
    return (
        <div className={active ? 'toggle-btn toggle-btn--active' : 'toggle-btn'} onClick={onToggleButton}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default ToggleButton;