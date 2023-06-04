import logoWhite from '../../img/logo-white.png';
import styles from './BannerWithLogo.module.css';

function BannerWithLogo() {
  return (
    <section className={styles.banner} id="about">
      <img
        className={styles.banner__logo}
        src={logoWhite}
        alt="Белый логотип"
      />
      <h1 className={styles.banner__title}>Breath Wood</h1>
      <p className={styles.banner__subtitle}>
        Столярная мастерская по изготовлению мебели и изделий из дерева ручной
        работы любой сложности.
      </p>
    </section>
  );
}

export default BannerWithLogo;
