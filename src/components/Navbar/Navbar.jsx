import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Startseite</a></li>
        <li className="p__opensans"><a href="#about">Über uns</a></li>
        <li className="p__opensans"><a href="#menu">Menü</a></li>
        <li className="p__opensans"><a href="#awards">Auszeichnungen</a></li>
        <li className="p__opensans"><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Anmelden / Registrieren</a>
        <div />
        <a href="/" className="p__opensans">Tisch reservieren</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='hamburgerIcon' onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className="overlay__close closeMenuIcon" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Startseite</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Über uns</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menü</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Auszeichnungen</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Kontakt</a></li>
            </ul>
          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;