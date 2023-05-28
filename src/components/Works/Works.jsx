import { useState, useEffect, useRef } from 'react';

import Button from '../Button/Button';

import styles from './Works.module.css';
import preview from '../../img/preview.jpg';
import WorkSliderItem from '../WorkSliderItem/WorkSliderItem';

const workImages = [
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
  '/wood_1.jpg',
];

function Works() {
  const [itemsInSlider, setItemsInSlider] = useState(5);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderWrapper = useRef(null);

  const pages = workImages.length / itemsInSlider;

  console.log(pages);

  // Первая инициализация

  const getSliderWidth = () => {
    if (sliderWrapper) setSliderWidth(sliderWrapper.current.offsetWidth);

    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // if (windowWidth < 1024) {
    //   setItemsInSlider(4);
    // }
    // if (windowWidth < 768) {
    //   setItemsInSlider(2);
    // }
  };

  useEffect(() => getSliderWidth(), []);

  useEffect(() => {
    window.addEventListener('resize', getSliderWidth);

    return () => window.removeEventListener('resize', getSliderWidth);
  }, []);

  useEffect(() => {
    console.log(sliderIndex);
  });

  return (
    <section className={styles.works}>
      <div className={styles.works__container}>
        <div className={styles.works__preview}>
          <div className={styles.works__image_container}>
            <img
              className={styles.works__image}
              src={preview}
              alt="Пример работы"
            />
          </div>
          <div className={styles.works__header}>
            <h2 className={styles.works__title}>Наши работы</h2>
            <Button text="Оставить заявку" mod="big" />
          </div>
        </div>
        <div className={styles.slider} ref={sliderWrapper}>
          <ul
            className={styles.slider__wrapper}
            style={{
              gap: (sliderWidth - (sliderWidth / 5 - 30) * 5) / 4,
              transform: `translateX(-${
                sliderIndex *
                (sliderWidth + Math.floor((sliderWidth - (sliderWidth / 5 - 30) * 5) / 4)) 
              }px)`,
            }}
          >
            {workImages.map((work, index) => (
              <WorkSliderItem
                key={index}
                img={work}
                itemsInSlider={itemsInSlider}
                width={sliderWidth}
              />
            ))}
          </ul>

          <button
            onClick={() => {
              if (sliderIndex !== 0) {
                setSliderIndex((prev) => prev - 1);
              }
            }}
          >
            Назад
          </button>
          <button
            onClick={() => {
              setSliderIndex((prev) => prev + 1);
            }}
          >
            Вперед
          </button>
          <div className={styles.slider__dots}></div>
        </div>
      </div>
    </section>
  );
}

export default Works;
