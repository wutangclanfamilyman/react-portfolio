import React, {Component} from 'react';
import SocialList from '../socialList';
import {Link} from 'react-router-dom';

import './nav.scss';
import GetData from '../../services/getData';

export default class Nav extends Component {

    getData = new GetData();

    state = {
        social: null
    }

    componentDidMount() {
        this.getData.getNavSocial()
            .then((result) => this.onLoaded(result))
            .catch(this.onError)
    }

    onLoaded = (social) => {
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

        const {social} = this.state;
        const {active, onToggleMenu} = this.props;

        return (
            <div className={active ? 'nav nav--active' : 'nav'}>
                <div className="nav__header">МЕНЮ</div>
                <div className="nav__list">
                    <ul>
                        <li>
                            <Link to="/" onClick={onToggleMenu}>Главная</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={onToggleMenu} >Обо мне</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={onToggleMenu} >Портфолио</Link>
                        </li>
                        <li>
                            <Link to="/contacts" onClick={onToggleMenu} >Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav__rights">
                    © 2020 - Все права защищены
                </div>
                <div className="nav_social">
                    {this.renderSocial(social)}
                </div>
            </div>
        )
    }

}