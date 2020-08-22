import React, { Component } from 'react';
import {Home, About, Contacts, Portfolio, PortfolioItem} from './pages';
import LeftNavbar from './components/leftNavbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/nav';

import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeMenu: false
    }
  }

  onToggle = () => {

      this.setState({
          activeMenu: !this.state.activeMenu
      })
      
  }


  render() {

    const {activeMenu} = this.state;

    return (
      <>
        <LeftNavbar active={activeMenu} onToggleButton={this.onToggle} />
        
          <Router>
            <div className="content">
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/portfolio/:id' render={
                ({match}) => {
                    const {id} = match.params;
                    return <PortfolioItem itemId={id} />
                }
            } />
            <Route path='/contacts' exact component={Contacts} />
            </div>
            <Nav active={activeMenu} onToggleMenu={this.onToggle} />
          </Router>
      </>
    )
  }
}
