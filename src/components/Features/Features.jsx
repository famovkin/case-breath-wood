import table from '../../img/feat1.png';
import dresser1 from '../../img/feat2.png';
import dresser2 from '../../img/feat3.png';

import styles from './Features.module.css';

function Features() {
  return (
    <section className={styles.features} id="about">
      <div className={styles.features__item}>
        <p className={styles.features__text}>
          Всё под ключ: от А до Я.
          <br />
          Сделаем проект и реализуем его без посредников
        </p>
        <img className={styles.features__img} src={table} alt="Стол" />
      </div>
      <div className={styles.features__item}>
        <img className={styles.features__img} src={dresser1} alt="Стол" />
        <p className={styles.features__text}>
          Работаем с заказами любой сложности.
          <br />
          По вашим чертежам, наброскам или фотографиям желаемого изделия, все
          реализуемо и может быть воплощено в жизнь
        </p>
      </div>
      <div className={styles.features__item}>
        <p className={styles.features__text}>
          К работе подходим очень щепетильно и стараемся сделать максимально
          качественно, учитывая все пожелания заказчика.
        </p>
        <img className={styles.features__img} src={dresser2} alt="Стол" />
      </div>
    </section>
  );
}

export default Features;
