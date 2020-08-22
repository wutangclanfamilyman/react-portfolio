import React, { Component } from 'react';
import SkillsItem from './skillsItem';
import './skillsList.scss';

export default class SkillsList extends Component {

    state = {
        skillsList: []
    }

    componentDidMount() {
        this.props.getData()
            .then((result) => {
                this.onLoadedItems(result)
            }).catch((err) => {
                console.log(err)
            });
    }

    onLoadedItems (skillsList) {
        this.setState({
            skillsList
        })
    }

    renderItems(skillsList) {
        return skillsList.map((item) => {
            const {id, icon, title} = item;
            return (
                <SkillsItem 
                    key={id}
                    image={icon}
                    label={title}>
                </SkillsItem>
            )
        })
    }

    render() {

        const {skillsList} = this.state;

        return (
            <div className="skills-list">
                {this.renderItems(skillsList)}
            </div>
        )
    }
}