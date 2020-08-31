import React, { Component } from 'react';
import {Header, Description, Button, LogoTop} from '../components/portfolioItem';
import SubHeader from '../components/subheader';
import Radium from 'radium';
import {Link} from 'react-router-dom';
import {ifVisibleAll} from '../services/static';

import './portfolioItem.scss';
import GetData from '../services/getData';
import { CSSTransition } from 'react-transition-group';

class PortfolioItem extends Component {

    getData = new GetData();

    constructor(props) {
        super(props);

        this.renderTechnologiesList = this.renderTechnologiesList.bind(this);
        this.onScrollEvent = this.onScrollEvent.bind(this);
    }

    state = {
        data: {},
        loading: true
    }

    renderTechnologiesList(technologies) {
        if (technologies) {
            const technologiesArr = technologies.split(", ");
            return technologiesArr.map((item, index) => {
                return <li key={index}>{item}</li>
            }) 
        }
    }
    

    onScrollEvent() {
        ifVisibleAll(document.querySelectorAll('.subheader'), 'subheader-done');
    }

    onScrollToDetails() {
        document.querySelector('.portfolio-item__info').scrollIntoView({block: "center", behavior: "smooth"})
        
    }

    async componentDidMount() {

        await this.getData.getPortfolioItem(this.props.itemId)
            .then(
                (data) => this.setState({data, loading: false})
            )
            .catch(
                this.setState({
                    loading: false
                })
            )

        document.querySelector('.content').style.overflowY = 'auto';
        document.querySelector('.content').addEventListener('scroll', this.onScrollEvent)
    }

    onScrollToTop() {
        document.querySelector('.content').scrollTo({
            top: 0
        })
    }

    async componentWillUnmount() {
        await this.onScrollToTop();
        document.querySelector('.content').removeEventListener('scroll', this.onScrollEvent)
    }

    render() {
        
        const {title, image, bgColor, release, liveLink, desktop, tablet, mobile, done, about, technologies} = this.state.data;

        return (
            <div className="section portfolio-item">
                <LogoTop logo={image} title={title} bgColor={bgColor} loading={this.state.loading} />
                <div className="section-content">
                    <div className="container">
                        <div className="portfolio-item__intro">
                            <Header title={title} loading={this.state.loading} />
                            <Description done={done} about={about} loading={this.state.loading} />
                            <Button link={liveLink} loading={this.state.loading} />
                            <CSSTransition in={!this.state.loading} classNames='portfolio-item__details' timeout={1200}>
                                <div className="portfolio-item__details" onClick={this.onScrollToDetails}>
                                    <div className="arrow"></div>
                                    <div className="arrow"></div>
                                    <div className="arrow"></div>
                                </div>
                            </CSSTransition>
                        </div>
                        <div className="row portfolio-item__info">
                            <div className="col-6 release">
                                <SubHeader icon={'https://vladyslav-koziatnyk.pp.ua/wp-content/themes/vkportfoliotheme/img/release.svg'} title={'Release'} style={{backgroundColor: bgColor}} />
                                <div className="release__value">{release}</div>
                                <SubHeader icon={'https://vladyslav-koziatnyk.pp.ua/wp-content/themes/vkportfoliotheme/img/technologies.svg'} title={'Technologies'} />
                                <ul>
                                   {this.renderTechnologiesList(technologies)} 
                                </ul>
                            </div>
                            <div className="col-6 portfolio-item__screenshot">
                                <SubHeader icon={'https://vladyslav-koziatnyk.pp.ua/wp-content/themes/vkportfoliotheme/img/screenshot.svg'} title={'Screenshot'} />
                                <div className="screenshot-desktop">
                                    <img src={desktop} alt='desktop' />
                                </div>
                                <div className="screenshot-tablet">
                                    <img src={tablet} alt='tablet' />
                                </div>
                                <div className="screenshot-mobile">
                                    <img src={mobile} alt='mobile' />
                                </div>
                            </div>
                        </div>
                        <Link to="/portfolio" className="portfolio-item__back">Back to portfolio</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(PortfolioItem);