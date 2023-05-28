import cx from 'classnames';
import styles from './Menu.module.css';

import NavItem from '../NavItem/NavItem';
import Button from '../Button/Button';

const navItems = [
  { title: 'О нас', link: '#about' },
  { title: 'Наши работы', link: '#works' },
  { title: 'Отзывы', link: '#feed' },
  { title: 'Контакты', link: '#contacts' },
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
        <nav className={styles.menu__nav}>
          <ul>
            {navItems.map((navElem, index) => (
              <NavItem key={index} text={navElem.title} link={navElem.link} />
            ))}
          </ul>
        </nav>
        <a className={styles.menu__phone} href="tel:+79998887766">
          +7 (904) 657-32-60
        </a>
        <Button mod={styles.menu__btn} text="Заказать звонок" />
      </div>
    </div>
  );
}

export default Menu;
