import React, {Component} from 'react';
import SocialItem from './socialItem';

import './socialList.scss';

export default class SocialList extends Component {

    state = {
        socialList: []
    }

    componentDidMount() {
        this.setState({
            socialList: this.props.social
        })
    }

    renderSocialItems(socialList, loading) {
        if(socialList == null) {
            return
        }
        return socialList.map((item, index) => {
            return <SocialItem key={index} loading={loading} link={item.link} title={item.title} icon={item.icon} />
        });
    }

    render() {

        const {socialList} = this.state;
        const {loading} = this.props;

        return(
            <ul className="nav__social-list">
                {this.renderSocialItems(socialList, loading)}
            </ul>
        )
    }
}