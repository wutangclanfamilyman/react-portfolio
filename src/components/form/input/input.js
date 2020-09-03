import React, {Component} from 'react';

import './input.scss';
import { CSSTransition } from 'react-transition-group';

export default class Input extends Component {
    
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
        if(!this.props.value) {
            this.setState({
                onFocused: false
            })
        } 
    }

    render() {

        const {label, id, value, onChange, loading} = this.props;

        return (
            <CSSTransition in={!loading} classNames={'form-group-input'} timeout={120}>
                <div className="form-group form-group-input">
                    <input className="form-input" id={id} name={id} onChange={onChange} value={value} onFocus={this.onFocus} onBlur={this.onBlur} />
                    <span className={this.state.onFocused ? 'on-focused' : ''} id="label-form-name">{label}</span>
                </div>
            </CSSTransition>
        )
    }
}