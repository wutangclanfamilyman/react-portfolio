import React, {Component} from 'react';
import Rectangle from '../components/rectangle';
import HomeHeader from '../components/homeHeader';
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

        const {title} = this.state;
 
        return (
            <div className="section main">
                <Rectangle classRectangle={'home-rectangle-top'}/>
                <Rectangle classRectangle={'home-rectangle-center-top'}/>
                <Rectangle classRectangle={'home-rectangle-center-bottom'}/>
                <Rectangle classRectangle={'home-rectangle-bottom'}/>

                <div className="main-header__wrapper">
                    <HomeHeader name={title.name} position={title.position} />
                </div>

            </div>
        )
    }
}