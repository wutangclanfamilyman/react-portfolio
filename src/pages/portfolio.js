import React, {Component} from 'react';
import Header from '../components/content/header';
import Slider from '../components/slider';
import Rectangle from '../components/rectangle';
import './portfolio.scss';
import GetData from '../services/getData';

export default class Portfolio extends Component {

    getData = new GetData();

    render() {

        return (
            <div className="section portfolio">
                <div className="section-content">
                    <div className="container">
                        <Header header={'Portfolio'} />
                        <Slider getData={this.getData.getPortfolioItems} />
                    </div>
                </div>
                <Rectangle classRectangle={'portfolio-rectangle'} />
            </div>
        )
    }
}