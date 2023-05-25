import styles from './Products.module.css';
import bullWood from '../../img/wood-circle.png';

function Products() {
  return (
    <section className={styles.products}>
      <h2 className={styles.products__title}>Наши услуги</h2>
      <ul>
        <li className={styles.products__item}>
          <img className={styles.products__img} src={bullWood} alt="Бревно" />
          <p className={styles.products__text}>
            Изготовление мебели по индивидуальным чертежам или наброскам
            заказчика.
          </p>
        </li>
        <li className={styles.products__item}>
          <img className={styles.products__img} src={bullWood} alt="Бревно" />
          <p className={styles.products__text}>
            Реставрация мебели и изделий из дерева.
          </p>
        </li>
        <li className={styles.products__item}>
          <img className={styles.products__img} src={bullWood} alt="Бревно" />
          <p className={styles.products__text}>
            Другие услуги: распил, шлифовка, строгание.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Products;
