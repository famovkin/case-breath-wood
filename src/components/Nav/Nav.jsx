import cx from 'classnames';

import Button from '../Button/Button';
import NavItem from '../NavItem/NavItem';
import styles from './Nav.module.css';

const goToAnchor = (idSection) => {
  const section = document.getElementById(idSection);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

// Вынести?
const navItems = [
  { title: 'О нас', link: '#about' },
  { title: 'Наши работы', link: '#works' },
  { title: 'Отзывы', link: '#feed' },
  { title: 'Контакты', link: '#contacts' },
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
            <NavItem key={index} text={navElem.title} link={navElem.link} />
          ))}
        </ul>
      </nav>
      <a className={styles.nav__phone} href="tel:+79612521819">
        +7 (961) 252-18-19
      </a>
      <Button text="Заказать звонок" handler={() => goToAnchor("contacts")} />
      {/* Подумать, как убрать телефон только тут
        Возможно, стоит вынести ссылку и кнопку из компонента
      */}
    </>
  );
}

export default Nav;
