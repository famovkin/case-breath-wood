import styles from './NavItem.module.css';

function NavItem({ text }) {
  return <li className={styles.navItem}>{text}</li>;
}

export default NavItem;
