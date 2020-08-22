import React, { Component } from 'react';
import {Header, Description, Button, LogoTop} from '../components/portfolioItem';
import SubHeader from '../components/subheader';
import {Link} from 'react-router-dom';

import './portfolioItem.scss';
import GetData from '../services/getData';

export default class PortfolioItem extends Component {

    getData = new GetData();

    constructor(props) {
        super(props);

        this.renderTechnologiesList = this.renderTechnologiesList.bind(this);
    }

    state = {
        data: {}
    }

    renderTechnologiesList(technologies) {
        if (technologies) {
            const technologiesArr = technologies.split(", ");
            return technologiesArr.map((item, index) => {
                return <li key={index}>{item}</li>
            }) 
        }
    }

    async componentDidMount() {

        await this.getData.getPortfolioItem(this.props.itemId)
            .then(
                (data) => this.setState({data})
            )
            .catch(
                console.log('Error')
            )

        document.querySelector('.content').style.overflowY = 'auto';
        document.querySelector('.left-navbar').style = `background: linear-gradient(180deg, ${this.state.data.bgColor} 0%, #8F9BB3 100%);`;
        document.querySelector('.nav').style = `background: linear-gradient(180deg, ${this.state.data.bgColor} 0%, #8F9BB3 100%)`;
    }

    componentWillUnmount() {
        document.querySelector('.content').style.overflowY = 'hidden';
        document.querySelector('.left-navbar').style = '';
        document.querySelector('.nav').style = '';
    }

    render() {
        
        const {title, image, bgColor, release, liveLink, desktop, tablet, mobile, done, about, technologies} = this.state.data;

        return (
            <div className="section portfolio-item">
                <LogoTop logo={image} title={title} bgColor={bgColor} />
                <div className="section-content">
                    <div className="container">
                        <Header title={title} />
                        <Description done={done} about={about} />
                        <Button link={liveLink} bgColor={bgColor} />
                        <div className="row portfolio-item__info">
                            <div className="col-6 release">
                                <SubHeader icon={'../img/release.svg'} title={'Release'} style={{backgroundColor: bgColor}} />
                                <div className="release__value">{release}</div>
                                <SubHeader icon={'../img/technologies.svg'} title={'Technologies'} />
                                <ul>
                                   {this.renderTechnologiesList(technologies)} 
                                </ul>
                            </div>
                            <div className="col-6 portfolio-item__screenshot">
                                <SubHeader icon={'../img/screenshot.svg'} title={'Screenshot'} />
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
                        <Link to="/portfolio" style={{backgroundImage: `linear-gradient(90deg, ${bgColor} 1.48%, #546E89 99.81%)`, boxShadow: `1px 1px 10px ${bgColor}`}} className="portfolio-item__back">Back to portfolio</Link>
                    </div>
                </div>
            </div>
        )
    }
}