import React, { Component } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {withRouter} from 'react-router-dom';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './slider.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Slider extends Component {

    state = {
        idSlider: 'swiper-portfolio',
        portfolioList: []
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

    onLoadedItems (portfolioList) {
        this.setState({
            portfolioList 
        })
    }

    renderSlides(list) {
        return list.map((slide, index) => {
            const {id, title, done, image, bgColor, textColor} = slide;

            return <SwiperSlide key={id}>
                <div className="slide-inner" style={{color: textColor, backgroundColor: bgColor}}>
                    <div className="slide-title">{title}</div>
                    <div className="slide-subtitle">{done}</div>
                    <div className="slide-link" style={{color: textColor}} onClick={() => {this.props.history.push(`/portfolio/${id}`)}}>Детальнее 
                        <span>
                            <svg width="24" height="13" viewBox="0 0 24 13" fill="none" >
                                <path d="M22 6.5L18 4.33334V5.95834H3V7.04167H18V8.66667L22 6.5Z" fill={`${textColor}`}/>
                            </svg>
                        </span>
                    </div>
                    <div className="slide-image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="slide-count">{this.setCount(+index + 1)}</div>
                </div>
            </SwiperSlide>
        });
    }
    
    render() {

        const {portfolioList} = this.state;

        return (
            <>
                <div className="swiper-left-arrow">
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46.23 49.77L32.49 36L46.23 22.23L42 18L24 36L42 54L46.23 49.77Z" fill="#0C2E49"/>
                    </svg>
                </div>
                <div className="swiper-right-arrow">
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7695 49.77L39.5095 36L25.7695 22.23L29.9995 18L47.9995 36L29.9995 54L25.7695 49.77Z" fill="#0C2E49"/>
                    </svg>
                </div>
                <Swiper 
                    id={this.idSlider}
                    spaceBetween={0}
                    slidesPerView={4}
                    centeredSlides={true}
                    navigation={{
                        nextEl: '.swiper-right-arrow',
                        prevEl: '.swiper-left-arrow'
                    }}
                >
                    {this.renderSlides(portfolioList)}
                </Swiper>
            </>
        )
    }

}

export default withRouter(Slider);