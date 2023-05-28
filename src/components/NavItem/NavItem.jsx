import styles from './NavItem.module.css';

function NavItem({ text, link }) {
  return (
    <li className={styles.navItem}>
      <a className={styles.navItem__link} href={link}>
        {text}
      </a>
    </li>
  );
}

export default NavItem;
