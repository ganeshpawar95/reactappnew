import React, { Component } from 'react';
import logo from './logo.png';
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
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav" >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link"  dir="ltr" >אודות </Link>
      </li>
      <li className="nav-item">
         <Link to="/Page"  className="nav-link" dir="ltr" >למה botarbut</Link>
       
      </li>
      <li className="nav-item">
       <Link to="/About"  className="nav-link" dir="ltr" >שירות לקוחות</Link>
      </li>
      <li className="nav-item">
       <Link to="/Services"  className="nav-link" dir="ltr" >השותפים</Link>
      </li>
    <li className="nav-item">
       <Link to="/CLIENTS"  className="nav-link" dir="ltr" > צור קשר</Link>
      </li>
    </ul>
  <a class="navbar-brand" href="/"><img src={logo} /></a>
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
