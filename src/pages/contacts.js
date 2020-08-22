import React, {Component} from 'react';
import SocialList from '../components/socialList';
import {Header} from '../components/content';
import Form from '../components/form';
import Rectangle from '../components/rectangle';
import './contacts.scss';
import GetData from '../services/getData';

export default class Contacts extends Component {

    getData = new GetData();

    state = {
        contacts: {},
        focus: false,
        selector: null
    }

    componentDidMount() {
        this.getData.getContacts()
            .then((result) => this.onLoaded(result))
            .catch(this.onError)
    }

    onLoaded = (contacts) => {
        this.setState({contacts})
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

    renderAddress(address) {
        if(address == null) {
            return;
        }
        else {
            return <div className="contacts__location"><a target={"blank"} href={`http://maps.google.com/maps?${address.link}`}><img src={address.icon} alt="location"/></a><div className="contacts__location-address">{address.link}</div></div>
        }
    }

    renderSocial(social) {
        if(social == null) {
            return
        }
        else {
           return <div className="contacts__social">
                <SocialList social={social} />
            </div>
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

        const {email, social, text, address, title} = this.state.contacts;
        return (
            <div className="section contacts">
                <div className="section-content">
                    <div className="container">
                        <Header header={title} />
                        <p className="contacts__intro">
                         {text} <a className="contacts__link" href={`mailto:${email}`}>{email}</a>
                        </p>
                        {this.renderAddress(address)}
                        {this.renderSocial(social)}
                        <div className="contacts__form">
                            <Form />
                        </div>
                    </div>
                </div>
                <Rectangle classRectangle={'contacts-rectangle'} />
            </div>
        )
    }
}