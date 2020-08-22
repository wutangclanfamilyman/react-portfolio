import React, { Component } from 'react';

import './moreInformationList.scss';

export default class MoreInformationList extends Component {

    state = {
        moreInformationList: []
    }

    componentDidMount() {
        this.props.getData()
            .then((result) => {
                this.onLoadedItems(result)
            }).catch((err) => {
                console.log(err)
            });
    }

    onLoadedItems (moreInformationList) {
        this.setState({
            moreInformationList
        })
    }

    renderItems(moreInformationList) {
        return moreInformationList.map((item) => {
            const {piblicationFirst, piblicationSecond} = item;
            return (<><li>{piblicationFirst}</li>
                    <li>{piblicationSecond}</li></>)
        })
    }
    
    render() {

        const {moreInformationList} = this.state;
        
        return (
            <div className="more-information__list">
                <p>{this.props.title}</p>
                <ul>
                    {this.renderItems(moreInformationList)}
                </ul>
            </div>
        )
    }
}