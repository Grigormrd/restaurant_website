import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Abonniere unseren Newsletter</h1>
      <p className="p__opensans">und verpasse nie wieder die neusten Updatets!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Gib deine Email Adresse ein..." />
      <button type="button" className="custom__button">Abonnieren</button>
    </div>
  </div>
);

export default Newsletter;