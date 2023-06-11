import { Contacts, Form } from '../../components';

import styles from './Footer.module.css';

function Footer() {
  return (
    <section className={styles.footer}>
      <Contacts />
      <Form />
    </section>
  );
}

export default Footer;
