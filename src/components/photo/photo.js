import React from 'react';
import './photo.scss';
import { CSSTransition } from 'react-transition-group';

const Photo = (props) => {
    return (
        <CSSTransition in={!props.loading} timeout={100} classNames={'about__photo-wrapper'}>
            <div className='about__photo-wrapper'>
                <div className="about__photo-rectangle">
                    <img src={props.photo} alt="Vladyslav Koziatnyk"/>
                    <div className="photo-fill"></div>
                </div>
                <svg width="400" height="500">
                    <rect width="400" height="500" />
                </svg>
            </div>
        </CSSTransition>
    )
}

export default Photo;