import React, {Component} from 'react';
import Input from './input';
import Textarea from './textarea';
import Button from '../button';
import './form.scss';

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }

    state = {
        name: '',
        email: '',
        message: ''
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    } 
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    render() {

        const {loading} = this.props;

        return (
            <form>
                <Input label={'Name'} id={'contacts-form-name'} span={'label-form-name'} loading={loading} value={this.state.name} onChange={this.onChangeName} />
                <Input label={'E-mail'} id={'contacts-form-email'} span={'label-form-email'} loading={loading} value={this.state.email} onChange={this.onChangeEmail} />
                <Textarea label={'Message'} id={'contacts-form-message'} span={'label-form-message'} loading={loading} value={this.state.message} onChange={this.onChangeMessage} />
                <Button label={'Send'} type={'button'} loading={loading} />
            </form>
        )
    }
}