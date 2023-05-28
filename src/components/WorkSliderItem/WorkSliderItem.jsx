import styles from './WorkSliderItem.module.css';

function WorkSliderItem({ img, width, itemsInSlider }) {
  return (
    <li className={styles.itemSlider}>
      <div className={styles.itemSlider__container}>
        <img
          className={styles.itemSlider__image}
          src={img}
          alt="Пример работы"
          style={{
            width: width / itemsInSlider - 30,
          }}
        />
      </div>
    </li>
  );
}

export default WorkSliderItem;
