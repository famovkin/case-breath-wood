import styles from './Banner.module.css';

function Banner() {
  return (
    <section className={styles.banner}>
      <h2 className={styles.banner__title}>
        Используем только<br/>
        <span className={styles.banner__highlight}>
          натуральное дерево:
        </span><br/>
        сосна, береза, лиственница , ясень, бук, дуб.
      </h2>
    </section>
  );
}

export default Banner;
