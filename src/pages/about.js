import React, {Component} from 'react';
import Header from '../components/content/header';
import SocialList from '../components/socialList';
import Photo from '../components/photo';
import SubHeader from '../components/subheader';
import EducationList from '../components/educationList';
import SkillsList from '../components/skillsList';
import MoreInformationList from '../components/moreInformationList';
import Button from '../components/button';
import './about.scss';
import GetData from '../services/getData';

import Triangle from '../components/triangle';
import Rectangle from '../components/rectangle/rectangle';

export default class About extends Component {

    getData = new GetData();

    state = {
        about: {},
        social: null
    }

    componentDidMount() {
        document.querySelector('.content').style.overflowY = 'auto';
        this.getData.getAboutInfo()
            .then((result) => this.onLoaded(result))
            .catch(this.onError);
        this.getData.getAboutSocial()
            .then((result) => this.onLoadedSocial(result))
            .catch(this.onError)
    }

    onLoaded = (about) => {
        this.setState({about})
    }

    onLoadedSocial = (social) => {
        this.setState({social})
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderSocial(social) {
        if(social == null) {
            return
        }
        else {
            return <SocialList social={social} />
        }
    }

    render() {

        const {about, social} = this.state;

        return (
            <div className="section about">
                <div className="section-content">
                    <div className="container">
                        <Header header={about.title} />
                        <div className="row">
                            <div className="col-6 about__intro">
                                <div className="about__intro-title">
                                    {about.subheader}
                                </div>
                                <div className="about__intro-content">
                                    {about.text}
                                </div>
                                {this.renderSocial(social)}
                            </div>
                            <div className="col-6 about__photo">
                                <Photo photo={about.photo} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 about__education">
                                <SubHeader icon={'img/education.svg'} title={'Образование'} />
                                <EducationList getData={this.getData.getEducationList}/>
                            </div>
                            <div className="col-6 about__skills">
                                <Triangle classTriangle={'skills-triangle'} />
                                <SubHeader icon={'img/skills.svg'} title={'Навыки'} />
                                <SkillsList getData={this.getData.getSkillsList}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 about__more">
                                <SubHeader icon={'img/more.svg'} title={'Дополнительная информация'} />
                                <MoreInformationList getData={this.getData.getMoreList} title={'Публикации'}/>
                            </div>
                        </div>
                        <Button label={'Curriculum vitae'} />
                    </div>
                </div>
                <Rectangle classRectangle={'about-polygon'} />
            </div>
        )
    }
}