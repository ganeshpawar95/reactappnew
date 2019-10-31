import React from 'react';
import Footer from './Footer.js'
import img9 from './img9.png';
import img10 from './img10.png';
import img11 from './img11.png';
import img12 from './img12.png';
import img13 from './img13.png';
import img16 from './img16.png';
import img17 from './img17.png';

import './Ap.css';
const CLIENTS = () => (
  <div>

<section id="supporters" class="section-with-bg wow fadeInUp">

      <div class="container">
        <div class="section-header">
          <h2>השותפים שלנו</h2>
        </div>

        <div class="row no-gutters supporters-wrap clearfix">

          <div class="col-md-4 ">
            <div class="supporter-logo">
              <img src={img9}  alt="" />
            </div>
          </div>
          
          <div class=" col-md-4 ">
            <div class="supporter-logo">
              <img src={img10} alt="" />
            </div>
          </div>
        
          <div class="col-md-4">
            <div class="supporter-logo">
              <img src={img11} alt="" />
            </div>
          </div>
</div>
</div>
        <div class="container">
        <div class="section-header">
          <h2>הלקוחות שלנו</h2>
        </div>

        <div class="row no-gutters supporters-wrap clearfix">

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src={img12} alt="" />
            </div>
          </div>
          
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src={img13} alt="" />
            </div>
          </div>
        
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src={img16}  alt="" />
            </div>
          </div>
          
          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="supporter-logo">
              <img src={img17} alt="" />
            </div>
          </div>
</div>
</div>
</section>
 <Footer />
 </div>
);

export default CLIENTS;