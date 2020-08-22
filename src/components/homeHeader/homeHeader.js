import React, {Component} from 'react';
import Button from '../button';
import {Link} from 'react-router-dom';

import './homeHeader.scss';

export default class HomeHeader extends Component {
    render() {

        const {name, position} = this.props;

        return (
            <div className="main-headers">
                <h1 className='main-header__title'>{name}</h1>
                <h2 className='main-header__subtitle'>{position}</h2>
                <Link to="/portfolio"><Button label='Портфолио' type='button' /></Link>
            </div>
        )
    }
}