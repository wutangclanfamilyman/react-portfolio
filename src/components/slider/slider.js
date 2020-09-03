import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import Slick from 'react-slick';
import { CSSTransition } from 'react-transition-group';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './slider.scss';

class Slider extends Component {

    constructor(props) {
        super(props);
        this.onNextSlide = this.onNextSlide.bind(this);
        this.onPrevSlide = this.onPrevSlide.bind(this);
    }

    state = {
        portfolioList: [],
        loading: true,
        settings: {
            className: "center",
            speed: 500,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        className: "left"
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        className: "left"
                    }
                }
            ]
        }
    }

    setCount(count) {
        if(count > 0 && count < 10) {
            return `0${count}`;
        }
        else {
            return count;
        }
    }

    componentDidMount() {
        this.props.getData()
            .then((result) => {
                this.onLoadedItems(result)
            }).catch((err) => {
                console.log(err)
            });
    }

    onNextSlide() {
        this.slider.slickNext();
    }

    onPrevSlide() {
        this.slider.slickPrev();
    }

    onLoadedItems (portfolioList) {
        this.setState({
            portfolioList,
            loading: false
        })
    }

    renderSlides(list) {
        return list.map((slide, index) => {
            const {id, title, done, image, bgColor, textColor} = slide;
            return (
                    <div className="portfolio__item" key={id} >
                        
                            <div className="portfolio__item-inner" style={{backgroundColor: bgColor, color: textColor}}>
                                <div className="portfolio__item-content">
                                    <div className="item-title">
                                        {title}
                                    </div>
                                    <div className="item-done">
                                        {done}
                                    </div>
                                    <div className="item-link">
                                        <Link style={{color: textColor}} to={`/portfolio/${id}`}>Просмотреть 
                                        <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d)">
                                            <path d="M23 6.5L19 4.33334V5.95834H4V7.04167H19V8.66667L23 6.5Z" fill={textColor} fill-opacity="0.87"/>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d" x="-3" y="0" width="32" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                            </filter>
                                            </defs>
                                        </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}></img>
                                </div>
                                <div className="portfolio__item-count">
                                    {this.setCount(index + 1)}
                                </div>
                            </div>
                        
                    </div>
            )
        });
    }
    
    render() {

        const {portfolioList, settings} = this.state;
        return (
            <div>
                <CSSTransition in={!this.state.loading} classNames={'slider'} timeout={100}>
                    <Slick ref={c => (this.slider = c)} {...settings}>
                        {this.renderSlides(portfolioList)}
                    </Slick>
                </CSSTransition>
                <CSSTransition in={!this.state.loading} classNames={'nav'} timeout={200} >
                <div className="portfolio-nav">
                    <div className="portfolio-prev-slide" onClick={this.onPrevSlide}>
                    </div>
                    <div className="portfolio-next-slide" onClick={this.onNextSlide}>
                    </div>
                </div>
                </CSSTransition>
            </div>
        )
    }

}

export default withRouter(Slider);