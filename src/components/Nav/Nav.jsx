import cx from 'classnames';

import Button from '../Button/Button';
import NavItem from '../NavItem/NavItem';
import styles from './Nav.module.css';

// Вынести?
const navItems = [
  { title: 'О нас', link: '#about'},
  { title: 'Наши работы', link: '#works'},
  { title: 'Отзывы', link: "#feed"},
  { title: 'Контакты', link: "#contacts"},
];

function Nav({ mod }) {
  return (
    <>
      <nav
        className={cx(styles.nav, {
          [mod]: mod,
        })}
      >
        <ul>
          {navItems.map((navElem, index) => (
            <NavItem key={index} text={navElem.title} link={navElem.link}/>
          ))}
        </ul>
      </nav>
      <a className={styles.nav__phone} href="tel:+79998887766">
        +7 (904) 657-32-60
      </a>
      <Button text="Заказать звонок" />
      {/* Подумать, как убрать телефон только тут
        Возможно, стоит вынести ссылку и кнопку из компонента
      */}
    </>
  );
}

export default Nav;
