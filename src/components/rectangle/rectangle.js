import React, {Component} from 'react';

import './rectangle.scss';

export default class Rectangle extends Component {

    constructor(props) {
        super(props);

        this.onLoadedHome = this.onLoadedHome.bind(this);
          
    }

    state = {
        loading: false
    }

    async componentDidUpdate() {

        const timer = await setTimeout(this.onLoadedHome, 1000);
        clearTimeout(this.timer);

    }

    onLoadedHome() {

        this.setState({
            loading: !this.state.loading
        })

    }

    componentWillUpdate() {

    }

    async componentWillUnmount() {

        

    }
    
    render() {

        return (
            <div className={this.state.loading ? `${this.props.classRectangle} rectangle--animated` : this.props.classRectangle}></div>
        )
    }
}