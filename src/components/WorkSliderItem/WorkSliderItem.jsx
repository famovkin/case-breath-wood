import styles from './WorkSliderItem.module.css';

function WorkSliderItem({img, width, itemsInSlider}) {
  console.log(itemsInSlider)
  return (
    <li className={styles.itemSlider} >
      <img
        className={styles.itemSlider__image}
        src={img}
        alt="Пример работы"
        style={{
          width: width / itemsInSlider - 30,
        }}
      />
    </li>
  );
}

export default WorkSliderItem;
