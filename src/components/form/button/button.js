import React from 'react';

import './button.scss';
import { CSSTransition } from 'react-transition-group';

const Button = (loading, onSubmit) => {
    return (
        <CSSTransition in={!loading} classNames={'contacts-form__submit'} timeout={1000}>
            <button onClick={onSubmit} className="contacts-form__submit" >Отправить</button>
        </CSSTransition>
    )
}

export default Button;