import cx from 'classnames';
import styles from './Menu.module.css';

import NavItem from '../NavItem/NavItem';

const navItems = [
  { title: 'О нас' },
  { title: 'Наши работы' },
  { title: 'Отзывы' },
  { title: 'Контакты' },
];

function Menu({ isMenuOpened, setIsMenuOpened }) {
  return (
    <div
      className={cx(styles.menu, {
        [styles.menu_opened]: isMenuOpened,
      })}
      onClick={() => setIsMenuOpened(false)}
    >
      <div
        className={cx(styles.menu__container, {
          [styles.menu__container_opened]: isMenuOpened,
        })}
      >
        <nav className={styles.nav_vertical}>
          <ul>
            {navItems.map((navElem, index) => (
              <NavItem key={index} text={navElem.title} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
