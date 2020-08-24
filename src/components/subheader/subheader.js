import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import './subheader.scss';

export default class SubHeader extends Component {

    ifVisible(selector, animation) {
        const bounding = selector.getBoundingClientRect();
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            if(!selector.classList.contains(animation)) {
                selector.classList.add(animation)
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.ifVisible(document.querySelector('.subheader'), 'subheader-done'))
    }

    render() {

        const {icon, title, loading} = this.props;

        return (
                <div className={'subheader'}>
                    <div className="subheader__icon">
                        <img src={icon} alt={title} />
                    </div>
                    {title}
                </div>
        )
    }
}