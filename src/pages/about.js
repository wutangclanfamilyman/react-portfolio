import React, {Component} from 'react';
import Header from '../components/content/header';
import SocialList from '../components/socialList';
import Photo from '../components/photo';
import SubHeader from '../components/subheader';
import EducationList from '../components/educationList';
import SkillsList from '../components/skillsList';
import PublicationList from '../components/publicationList';
import Button from '../components/button';
import './about.scss';
import GetData from '../services/getData';

import Triangle from '../components/triangle';
import Rectangle from '../components/rectangle/rectangle';
import { CSSTransition } from 'react-transition-group';

export default class About extends Component {

    getData = new GetData();

    constructor(props) {
        super(props);
        this.onScrollEvent = this.onScrollEvent.bind(this)
    }

    state = {
        about: {},
        social: null,
        loading: true
    }

    componentDidMount() {
        document.querySelector('.content').style.overflowY = 'auto';
        document.querySelector('.content').addEventListener('scroll', this.onScrollEvent)
        this.getData.getAboutInfo()
            .then((result) => this.onLoaded(result))
            .catch(this.onError);
        this.getData.getAboutSocial()
            .then((result) => this.onLoadedSocial(result))
            .catch(this.onError)
        
    }

    async componentWillUnmount() {
        await this.onScrollToTop();
        document.querySelector('.content').removeEventListener('scroll', this.onScrollEvent)
    }

    onScrollEvent() {
        this.ifVisibleAll(document.querySelectorAll('.subheader'), 'subheader-done');
        this.ifVisibleAll(document.querySelectorAll('.education-list__item'), 'education-list__item-done');
        this.ifVisibleAll(document.querySelectorAll('.skills-item'), 'skills-item-done');
        this.ifVisibleAll(document.querySelectorAll('.publication__list ul li'), 'publication__li-done');
    }

    onScrollToTop() {
        document.querySelector('.content').scrollTo({
            top: 0
        })
    }

    onLoaded = (about) => {
        this.setState({about})
    }

    onLoadedSocial = (social) => {
        this.setState({social, loading: false})
    }

    ifVisibleAll(selectors, animation) {
        selectors.forEach((item) => {
            let bounding = item.getBoundingClientRect();
            if (
                bounding.top >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                if(!item.classList.contains(animation)) {              
                    item.classList.add(animation)
                }
            }
        })
    }

    onScrollToDetails() {
        document.querySelector('.about__details').scrollIntoView({block: "center", behavior: "smooth"})
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
            return <SocialList loading={this.state.loading} social={social} />
        }
    }

    render() {

        const {about, social, loading} = this.state; 

        return (
            
            <div className="section about">
                <div className="section-content">
                    <div className="container">
                        <Header loading={loading} header={about.title} />
                        <div className="row about-content">
                            <CSSTransition in={!loading} classNames='about-intro' timeout={1000}>
                                <div className="col-6 about__intro">
                                    <div className="about__intro-title">
                                        {about.subheader}
                                    </div>
                                    <div className="about__intro-content">
                                        {about.text}
                                    </div>
                                    {this.renderSocial(social)}
                                </div>
                            </CSSTransition>
                            <div className="col-6 about__photo">
                                <Photo loading={loading} photo={about.photo} />
                            </div>
                            <CSSTransition in={!this.state.loading} classNames='about-item__details' timeout={1200} >
                            <div className="about-item__details" onClick={this.onScrollToDetails}>
                                <div className="arrow"></div>
                                <div className="arrow"></div>
                                <div className="arrow"></div>
                            </div>
                            </CSSTransition>
                        </div>
                        <div className="row about__details">
                            <div className="col-6 about__education">
                                <SubHeader loading={loading} icon={'img/education.svg'} title={'Образование'} />
                                <EducationList getData={this.getData.getEducationList}/>
                            </div>
                            <div className="col-6 about__skills">
                                <Triangle classTriangle={'skills-triangle'} />
                                <SubHeader loading={loading} icon={'img/skills.svg'} title={'Навыки'} />
                                <SkillsList getData={this.getData.getSkillsList}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 about__more">
                                <SubHeader loading={loading} icon={'img/more.svg'} title={'Дополнительная информация'} />
                                <PublicationList getData={this.getData.getPublicationList} title={'Публикации'}/>
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