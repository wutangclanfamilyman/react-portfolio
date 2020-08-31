import React, { Component } from 'react';
import {Home, About, Contacts, Portfolio, PortfolioItem} from './pages';
import LeftNavbar from './components/leftNavbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/nav';

import './App.css';
import { CSSTransition } from 'react-transition-group';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeMenu: false,
      loading: true
    }
  }

  onToggle = () => {

      this.setState({
          activeMenu: !this.state.activeMenu
      })
      
  }

  render() {

    const {activeMenu} = this.state;

    const routes = [
      {path: '/', name: 'Home', Component: Home},
      {path: '/about', name: 'About', Component: About},
      {path: '/portfolio', name: 'Portfolio', Component: Portfolio},
      {path: '/contacts', name: 'Contacts', Component: Contacts}
    ]

    return (
      <>
        <LeftNavbar active={activeMenu} onToggleButton={this.onToggle} />
          <Router>
            <div className="content">

              {routes.map(({path, Component}) => (
                <Route key={path} exact path={path}>
                  {({match}) => (
                    <CSSTransition 
                      in={match != null} 
                      timeout={500}
                      classNames="page"
                      unmountOnExit
                    >
                      <div className="page">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}

              <Route exact path='/portfolio/:id' render={
                  ({match}) => {
                      const {id} = match.params;
                      return <CSSTransition 
                        in={match != null} 
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                      >
                      <PortfolioItem itemId={id} />
                    </CSSTransition>
                  }
              } />
              {/* <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/portfolio' exact component={Portfolio} />
              <Route path='/portfolio/:id' render={
                  ({match}) => {
                      const {id} = match.params;
                      return <PortfolioItem itemId={id} />
                  }
              } />
              <Route path='/contacts' exact component={Contacts} /> */}
            </div>
            <Nav active={activeMenu} onToggleMenu={this.onToggle} />
          </Router>
      </>
    )
  }
}
