import React, {Component} from 'react';
import './photo.scss';
import { CSSTransition } from 'react-transition-group';

export default class Photo extends Component {

    render() {

        const {photo, loading} = this.props;

        return (
            <CSSTransition in={!loading} timeout={1000} classNames={'about__photo-wrapper'}>
                <div className='about__photo-wrapper'>
                    <div className="about__photo-rectangle">
                        <img src={photo} alt="Vladyslav Koziatnyk"/>
                        <div className="photo-fill"></div>
                    </div>
                    <svg width="400" height="500">
                        <rect width="400" height="500" />
                    </svg>
                </div>
            </CSSTransition>
        )
    }
}