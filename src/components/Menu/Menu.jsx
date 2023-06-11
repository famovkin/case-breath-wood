import cx from 'classnames';
import styles from './Menu.module.css';

import { NavItem } from '../../components';
import { Button } from '../ui';

const goToAnchor = (idSection) => {
  const section = document.getElementById(idSection);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

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
          +7 (961) 252-18-19
        </a>
        <Button
          mod={styles.menu__btn}
          text="Заказать звонок"
          handler={() => goToAnchor('contacts')}
        />
      </div>
    </div>
  );
}

export default Menu;
