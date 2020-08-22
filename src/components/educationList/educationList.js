import React, { Component } from 'react';
import EducationItem from './educationItem';
import './educationList.scss';

export default class EducationList extends Component {

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
            const {id, period, institution, specialty, degree} = item;
            return (
                <EducationItem 
                    key={id}
                    years={period}
                    institution={institution}
                    specialty={specialty}
                    degree={degree}>
                </EducationItem>
            )
        })
    }

    render() {

        const {educationList} = this.state;

        return (
            <div className="education-list">
                <ul>
                    {this.renderItems(educationList)}
                </ul>
            </div>
        )
    }
}