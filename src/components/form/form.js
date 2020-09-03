import React, {Component} from 'react';
import Input from './input';
import Textarea from './textarea';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';
import './form.scss';

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.postData = this.postData.bind(this);
    }

    state = {
        name: '',
        email: '',
        message: ''
    }

    validateEmail(value) {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(reg.test(value) === true) {
            return true;
        }
        else {
            return false;
        }
    }

    onChangeName(e) {
        if(e.target.value) {
            e.target.style.borderBottom = '1px solid green';
        }
        else {
            e.target.style.borderBottom = '1px solid red';
        }
        this.setState({
            name: e.target.value
        })
    } 
    onChangeEmail(e) {
        if (this.validateEmail(e.target.value)) {
            e.target.style.borderBottom = '1px solid green';
        }
        else {
            e.target.style.borderBottom = '1px solid red';
        }
           this.setState({
            email: e.target.value
        })
    }
    onChangeMessage(e) {
        if(e.target.value) {
            e.target.style.borderBottom = '1px solid green';
        }
        else {
            e.target.style.borderBottom = '1px solid red';
        }
        this.setState({
            message: e.target.value
        })
    }

    postData(form) {
        axios.post('https://vladyslav-koziatnyk.pp.ua/wp-content/themes/vkportfoliotheme/send.php', form).then((result) => {
            if(result.status !== 200) {
                this.onFormError(result.statusText);
                return;
            }
            this.onFormSend();
        }).catch((error) => {
            this.onFormError(error);
        });
    }

    onFormSend() {
        const resultDiv = document.querySelector('.form-result');
        resultDiv.innerHTML = "Ваше сообщение отправлено!";
        resultDiv.style.color = "green";
        this.onClearForm();
    }

    onFormError(error) {
        const resultDiv = document.querySelector('.form-result');
        resultDiv.innerHTML = error;
        resultDiv.style.color = "red";
    }

    onClearForm = () => {
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    onSubmitForm(e) {
        e.preventDefault();
        const resultDiv = document.querySelector('.form-result');
        resultDiv.innerHTML = 'Отправка...';
        resultDiv.style.color = "green";

        const {name, email, message} = this.state;
        let bodyForm = new FormData();
        
        if(name && this.validateEmail(email) && message) {
            bodyForm.append('name', name);
            bodyForm.append('email', email);
            bodyForm.append('message', message);
            this.postData(bodyForm);
        }
        else {
            resultDiv.innerHTML = "Ошибка! Проверьте правильность данных."
            resultDiv.style.color = "red";
        }
    }

    render() {

        const {loading} = this.props;

        return (
            <form id='contacts-form'>
                <Input label={'Имя'} id={'contacts-form-name'} span={'label-form-name'} loading={loading} value={this.state.name} onChange={this.onChangeName} />
                <Input label={'E-mail'} id={'contacts-form-email'} span={'label-form-email'} loading={loading} value={this.state.email} onChange={this.onChangeEmail} />
                <Textarea label={'Сообщение'} id={'contacts-form-message'} span={'label-form-message'} loading={loading} value={this.state.message} onChange={this.onChangeMessage} />
                <CSSTransition in={!loading} classNames={'contacts-form__submit'} timeout={100}>
                    <button onClick={this.onSubmitForm} className="contacts-form__submit" >Отправить</button>
                </CSSTransition>
                <div className="form-result"></div>
            </form>
        )
    }
}