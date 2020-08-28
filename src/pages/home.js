import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import Button from '../components/button';
import {Link} from 'react-router-dom';
import GetData from '../services/getData';

import './home.scss';

export default class Home extends Component {

    getData = new GetData();

    state = {
        title: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        document.querySelector('.content').scrollTo(0,0);
        document.querySelector('.content').style.overflowY = 'hidden';
        this.getData.getHomeTitle()
            .then(this.onTitleLoaded)
            .catch(this.onError)
    }

    onTitleLoaded = (title) => {
        this.setState({title, loading: false})
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {

        const {title, loading} = this.state;
 
        return (
            <div className="section main">
                <CSSTransition in={!loading} timeout={1000} classNames="rectangle">
                    <div className="home-rectangle">
                        <div className='home-rectangle-top'></div>
                        <div className='home-rectangle-center-top'></div>
                        <div className='home-rectangle-center-bottom'></div>
                        <div className='home-rectangle-bottom'></div>
                    </div>
                </CSSTransition>
                <div className="main-header__wrapper">
                    <div className="main-headers">
                        <CSSTransition in={!loading} timeout={1000} classNames="title">
                            <div className="home-titles">
                                <h1 className='main-header__title'>{title.name}</h1>
                                <h2 className='main-header__subtitle'>{title.position}</h2>
                            </div>
                        </CSSTransition>
                        <Link to="/portfolio"><Button loading={loading} label='Портфолио' type='button' /></Link>
                    </div>
                </div>

            </div>
        )
    }
}