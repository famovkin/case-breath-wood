import cx from 'classnames';

import Button from '../Button/Button';

import styles from './Nav.module.css';

function Nav({ mod, isMenuOpened}) {
  return (
    <>
      <nav className={cx(styles.nav, {
        [mod]: isMenuOpened,
      })}>
        <ul>
          <li className={styles.nav__item}>О нас</li>
          <li className={styles.nav__item}>Наши работы</li>
          <li className={styles.nav__item}>Отзывы</li>
          <li className={styles.nav__item}>Контакты</li>
        </ul>
      </nav>
      <a className={styles.nav__phone} href="tel:+79998887766">
        +7 (904) 657-32-60
      </a>
      <Button text="Заказать звонок" />
    </>
  );
}

export default Nav;
