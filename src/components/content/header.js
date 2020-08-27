import React, {Component} from 'react';
import Circle from '../circle';
import {CSSTransition} from 'react-transition-group';
import './header.scss';

export default class Header extends Component {

    render() {

        const {header, loading} = this.props;
        console.log(loading)
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