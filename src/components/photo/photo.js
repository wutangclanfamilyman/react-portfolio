import React, {Component} from 'react';
import './photo.scss';

export default class Photo extends Component {

    constructor(props){
        super(props);

        this.onLoading = this.onLoading.bind(this);
    }

    state = {
        loading: true
    }

    onLoading() {
        this.setState({
            loading: false
        })
    }

    componentDidMount() {
        this.timerId = setInterval(this.onLoading, 500)
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {

        const {photo} = this.props;

        return (
            <div className={this.state.loading ? 'about__photo-wrapper' : 'about__photo-wrapper about__photo-wrapper--loaded'}>
                <div className="about__photo-rectangle">
                    <img src={photo} alt="Vladyslav Koziatnyk"/>
                    <div className="photo-fill"></div>
                </div>
                <svg width="400" height="500">
                    <rect width="400" height="500" />
                </svg>
            </div>
        )
    }
}