import React from 'react';
import './Ap.css';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Footer from './Footer.js'
import logo from './logo.png';
import BOT from './BOT.png';
import About from './About';
import Messages from './Messages';
const Home = () => (
  <div>

<div id="slider">
<div id="headerSlider" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={BOT} className="d-block img-fluid slider-image"  />
    </div>
</div>
</div>	
</div>

	<Footer />
 </div>
);

export default Home;