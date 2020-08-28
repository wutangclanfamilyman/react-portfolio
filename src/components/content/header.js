import React, {Component} from 'react';
import Circle from '../circle';
import {CSSTransition} from 'react-transition-group';
import './header.scss';

export default class Header extends Component {

    render() {

        const {header, loading} = this.props;
        return (
            <CSSTransition in={!loading} timeout={500} classNames={'header'}>
                <div className="section-header">
                    <Circle classCircle={'header-circle'} />
                    {header}
                </div>
            </CSSTransition>
        )
    }
}