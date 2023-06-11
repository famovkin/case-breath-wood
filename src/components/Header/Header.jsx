import { useRef, useEffect } from 'react';

import Nav from '../Nav/Nav';

import logo from '../../img/logo.png';
import burger from '../../img/burger.png';

import styles from './Header.module.css';

function Header({ isMenuOpened, setIsMenuOpened }) {
  const headerRef = useRef(null);
  const burgerHandler = () => setIsMenuOpened(true);

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

  return (
    <header className={styles.header} ref={headerRef}>
      <img src={logo} alt="" className={styles.header__logo} />
      <Nav mod={styles.header__nav} isMenuOpened={isMenuOpened} />
      <img
        className={styles.header__burger}
        src={burger}
        alt="Меню"
        onClick={burgerHandler}
      />
    </header>
  );
}

export default Header;
