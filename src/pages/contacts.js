import React, {Component} from 'react';
import SocialList from '../components/socialList';
import {Header} from '../components/content';
import Form from '../components/form';
import Rectangle from '../components/rectangle';
import './contacts.scss';
import GetData from '../services/getData';
import { CSSTransition } from 'react-transition-group';

export default class Contacts extends Component {

    getData = new GetData();

    state = {
        contacts: {},
        focus: false,
        selector: null,
        loading: true
    }

    componentDidMount() {
        this.getData.getContacts()
            .then((result) => this.onLoaded(result))
            .catch(this.onError)
    }

    onLoaded = (contacts) => {
        this.setState({contacts, loading: false})
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onFocus(selector) {
        this.setState({
            focus: !this.state.focus,
            selector: selector
        })
    }

    renderAddress(address, loading) {
        if(address == null) {
            return;
        }
        else {
            return (
                <>
                    <a target={"blank"} className="contacts__location-icon" href={`http://maps.google.com/maps?${address.link}`}>
                        <img src={address.icon} alt="location"/>
                    </a>
                    <div className="contacts__location-address">{address.link}</div>
                </>
            )
        }
    }

    renderSocial(social, loading) {
        if(social == null) {
            return
        }
        else {
           return <SocialList social={social} loading={loading} />
        }
    }
 
    setClass() {
        if(this.state.focus === true) {
            return 'focused';
        }
        else {
            return '';
        }
    }

    render() {

        const {contacts, loading} = this.state;
        return (
            <div className="section contacts">
                <div className="section-content">
                    <div className="container">
                        <Header header={contacts.title} loading={loading}/>
                        <CSSTransition in={!loading} classNames={'contacts__intro'} timeout={1000}>
                            <p className="contacts__intro">
                                {contacts.text} <a className="contacts__link" href={`mailto:${contacts.email}`}>{contacts.email}</a>
                            </p>
                        </CSSTransition>
                        <CSSTransition in={!loading} classNames={'contacts__location'} timeout={1100}>
                            <div className="contacts__location">
                                {this.renderAddress(contacts.address, loading)}
                            </div>
                        </CSSTransition>
                        <CSSTransition in={!loading} classNames={'contacts__social'} timeout={1000}>
                            <div className="contacts__social">
                                {this.renderSocial(contacts.social, loading)}
                            </div>
                        </CSSTransition>
                        <div className="contacts__form">
                            <Form loading={loading} />
                        </div>
                    </div>
                </div>
                <CSSTransition in={!loading} timeout={1000} classNames="rectangle">
                    <div className="contacts-rectangle"></div>
                </CSSTransition>
            </div>
        )
    }
}