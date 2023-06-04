import { useRef, useEffect } from 'react';

import BannerWithLogo from './components/BannerWithLogo/BannerWithLogo';
import Features from './components/Features/Features';
import Menu from './components/Menu/Menu';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';

import './App.css';
import logo from './img/logo.png';

import burger from './img/burger.png';
import { useState } from 'react';
import styles from './components/Nav/Nav.module.css';
import Feedback from './components/Feedback/Feedback';

const scriptUrl =
  'https://script.google.com/macros/s/AKfycbwrRhPd9VSwFJi5-ZUbjjNmfueOsncZN8tdRKPfARguYuCPDuYjwNolW4MEsD0UKrBb/exec';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = headerRef.current.offsetHeight;
          const targetOffsetTop = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  }, []);

  const headerRef = useRef(null);
  const [inputValues, setInputValues] = useState({
    email: '',
    phone: '',
    username: '',
    question: '',
  });

  const burgerHandler = () => setIsMenuOpened(true);

  return (
    <div className="app">
      <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <header className="header" ref={headerRef}>
        <img src={logo} alt="" className="header__logo" />
        <Nav mod={styles.header__nav} isMenuOpened={isMenuOpened} />
        <img
          className="header__burger"
          src={burger}
          alt="Меню"
          onClick={burgerHandler}
        />
      </header>
      <BannerWithLogo />
      <Features />
      <Banner />
      <Products />
      <Works />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
