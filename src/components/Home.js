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
import Bot from './Bot.png';
import About from './About';
import Messages from './Messages';
const Home = () => (
  <div>

<div id="slider">
<div id="headerSlider" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
 
    <div class="carousel-item active">
      <img class="d-block img-fluid slider-image" src={Bot} />
    <div class="carousel-caption">
    <h1 dir="rtl">הזמנת כרטיסים אוטומטית בזיהוי קולי</h1>
    <h1>שירות ללקוחות 24/7</h1>
    <p>העולם מתקדם מרגע לרגע, הטכנולוגיה דוהרת ועכשיו היא כאן בשבילך. הכירו את 
BOTATBUT מבית אודיוקודס: נציג דיגיטלי וחכם שבקיא בכל פרט וזמין 24/7..
לכל אירוע, בכל היקף, BOTATBUT מאפשר מענה אוטומטי בקו הראשי של העסק באמצעות ממשק זיהוי דיבור פשוט, יעיל וידידותי למשתמש. בקיצור, הקול כולל הכל: 
חיסכון זמן המתנה למתקשרים לצד חיסכון תפעולי של עשרות אלפי שקלים בחודש.</p>
    </div>
    

    </div>
</div>
</div>
</div>

	<Footer />
 </div>
);

export default Home;