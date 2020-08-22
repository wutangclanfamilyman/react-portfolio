import React, {Component} from 'react';

import './textarea.scss';

export default class Textarea extends Component {

    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    state = {
        onFocused: false
    }

    onFocus() {
        this.setState({
            onFocused: true
        })
    }

    onBlur() {
        if(!this.state.value) {
            this.setState({
                onFocused: false
            })
        } 
    }

    render() {

        const {label, id, value, onChange} = this.props;

        return (
            <div className="form-group form-group-textarea">
                <textarea className="form-input form-input-textarea" id={id} name={id} onChange={onChange} value={value} onFocus={this.onFocus} onBlur={this.onBlur} />
                <span className={this.state.onFocused ? 'on-focused' : ''} id="label-form-message">{label}</span>
            </div>
        )
    }
}