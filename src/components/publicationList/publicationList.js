import React, { Component } from 'react';

import './publicationList.scss';

export default class PublicationList extends Component {

    state = {
        educationList: []
    }

    componentDidMount() {
        this.props.getData()
            .then((result) => {
                this.onLoadedItems(result)
            }).catch((err) => {
                console.log(err)
            });
    }

    onLoadedItems (educationList) {
        this.setState({
            educationList
        })
    }

    renderItems(educationList) {
        return educationList.map((item) => {
            return <li key={item.id}>{item.title}</li>
        })
    }
    
    render() {
        
        const {educationList} = this.state;

        return (
            <div className="publication__list">
                <p>{this.props.title}</p>
                <ul>
                    {this.renderItems(educationList)}
                </ul>
            </div>
        )
    }
}