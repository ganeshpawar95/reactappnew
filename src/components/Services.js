import React from 'react';
import Footer from './Footer.js'
import serr from './serr.png';
import './Ap.css';
const Services = () => (
  <div>
<section id="services">
<div className="container">
<h1 dir="ltr">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;הזמנת כרטיסים אוטומטית בזיהוי קולי</h1>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;מה הערך מוסף לבוט הדיגיטלי?</p>
<img src={serr} alt="Nature" className="responsive" />
    <div className="row services">
        <div className="col-md-3 text-center">
            <div className="icon">
            <i className="fa fa-check-circle" ></i>
            </div>
            <p>זמין 24/7 ואפס זמן המתנה גם בחגים, סופי שבוע ומחוץ לשעות העבודה</p>
        </div>
        <div className="col-md-3 text-center">
            <div className="icon">
            <i className="fa fa-check-circle" ></i>
            </div>
          <p>רכישה ומענה אוטומטי על מופעים, שעות ותאריכים</p>
        </div>
        <div className="col-md-3 text-center">
            <div className="icon">
            <i className="fa fa-check-circle" ></i>
            </div>
            <p>הבוט יענה מיד ללא זמני המתנה . אין פספוס שיחות !</p>
        </div>
        <div className="col-md-3 text-center">
            <div className="icon">
            <i className="fa fa-check-circle" ></i>
            </div>
          <p>מידע בהתאמה אישית: חניה, שעות פעילות, אטרקציות באזור ומופעים נוספים</p>
        </div>
        <div className="col-md-3 text-center">
            <div className="icon">
            <i className="fa fa-check-circle" ></i>
            </div>
          <p>ממשק קולי פשוט ואינטואיטיבי עם הבנת שפה יומיומית</p>
        </div>
        <div className="col-md-3 text-center">
            <div className="icon">
            <i className="fa fa-check-circle" ></i>
            </div>
             <p>הבוט יכול למכור כרטיסים ולתת מענה להזמנת כרטיסים למנויים.</p>
        </div>
        <div className="col-md-3 text-center">
            <div className="icon">
            <i className="fa fa-check-circle" ></i>
            </div>
           <p>הבוט יזהה מתקשר אשר יש לו הזמנה עתידית ויזכיר לו אותה.</p>
        </div>
        <div className="col-md-3 text-center">
            <div className="icon">
            <i className="fa fa-check-circle" ></i>
            </div>
            <p>הבוט יזהה לקוח חוזר או מנוי לפי מספר הטלפון.</p>
        </div>
    </div>
</div>
</section> 

 <Footer />
 </div>
);

export default Services;