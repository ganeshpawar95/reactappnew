import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Page from './components/Page';
import Services from './components/Services';
import CLIENTS from './components/CLIENTS';

class App extends Component {
  render() {
    return (
      <div className="App">
      <section id="header">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
  <img src={logo}  /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav" >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link"  dir="ltr" >Home </Link>
      </li>
      <li className="nav-item">
         <Link to="/Page"  className="nav-link" dir="ltr" >Page</Link>
       
      </li>
      <li className="nav-item">
       <Link to="/About"  className="nav-link" dir="ltr" >About</Link>
      </li>
      <li className="nav-item">
       <Link to="/Services"  className="nav-link" dir="ltr" >Services</Link>
      </li>
    <li className="nav-item">
       <Link to="/CLIENTS"  className="nav-link" dir="ltr" > OUR CLIENTS</Link>
      </li>
    </ul>
  
  </div>
  
</nav>
</section>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/Page" component={Page} />
            <Route path="/about" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/CLIENTS" component={CLIENTS} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
