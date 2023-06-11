import styles from './WorkSliderItem.module.css';

function WorkSliderItem({ img, width, itemsInSlider, gap }) {
  return (
    <li className={styles.itemSlider}>
      <div className={styles.itemSlider__container}>
        <img
          className={styles.itemSlider__image}
          src={img}
          alt="Пример работы"
          style={{
            width: width / itemsInSlider - gap,
            height: width / itemsInSlider - gap,
          }}
        />
      </div>
    </li>
  );
}

export default WorkSliderItem;
