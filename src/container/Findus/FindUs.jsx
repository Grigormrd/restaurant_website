import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Finde uns</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Spitalerstraße 73A, 22678 Hamburg</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>ÖffungsZeiten</p>
        <p className="p__opensans">So - Do: 10:00 - 02:00 Uhr</p>
        <p className="p__opensans">Fr - Sa: 10:00 - 03:00 Uhr</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Besuche uns</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;