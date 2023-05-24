import cx from 'classnames';
import styles from './Menu.module.css';

function Menu({ isMenuOpened, setIsMenuOpened }) {
  return (
    <div
      className={cx(styles.menu, {
        menu_opened: isMenuOpened,
      })}
      onClick={() => setIsMenuOpened(false)}
    >
      <div
        className={cx(styles.menu__container, {
          menu__container_opened: isMenuOpened,
        })}
      >
        <nav className={styles.nav_horizontal}>
          <ul>
            <li className="nav__item">О нас</li>
            <li className="nav__item">Наши работы</li>
            <li className="nav__item">Отзывы</li>
            <li className="nav__item">Контакты</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
