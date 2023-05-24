import './App.css';
import logo from './img/logo.png';

import Button from './components/Button/Button';
import BannerWithLogo from './components/BannerWithLogo/BannerWithLogo';
import Features from './components/Features/Features';
import Menu from './components/Menu/Menu';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';

import burger from './img/burger.png';
import { useState } from 'react';
import styles from "./components/Nav/Nav.module.css"
function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const burgerHandler = () => {
    setIsMenuOpened(true);
  };
  return (
    <div className="App">
      {/* <Menu /> */}
      <header className="header">
        <img src={logo} alt="" className="header__logo" />
        <Nav mod={styles.header__nav} isMenuOpened={isMenuOpened}/>
        <img
          className="header__burger"
          src={burger}
          alt="Меню"
          onClick={burgerHandler}
        />
      </header>

      <BannerWithLogo />
      {/* <Features />
      <Banner /> */}
    </div>
  );
}

export default App;
