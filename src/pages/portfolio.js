import React, { Component } from 'react';
import Slider from '../components/slider';
import './portfolio.scss';
import GetData from '../services/getData';

export default class Portfolio extends Component {
    
    getData = new GetData();

    componentDidMount() {
        document.querySelector('.content').style.overflowY = 'hidden';
    }


    render() {

        return ( 
            <div className = "section portfolio" >
                <div className = "section-content" >
                    <div className = "container" >
                        <Slider getData = { this.getData.getPortfolioItems }/> 
                    </div>
                </div> 
            </div>
        )
    }
}