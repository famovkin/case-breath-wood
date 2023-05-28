import { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

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
];

function Works() {
  const [itemsInSlider, setItemsInSlider] = useState(5);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [pages, setPages] = useState(0);
  const sliderWrapper = useRef(null);

  useEffect(() => {
    const updatedPages = workImages.length / itemsInSlider;
    setPages(updatedPages);
  }, [itemsInSlider]);

  // useEffect(() => {
  //   console.log('pages', pages);
  //   console.log(sliderIndex);
  // });

  // Первая инициализация
  const getSliderWidth = () => {
    if (sliderWrapper) setSliderWidth(sliderWrapper.current.offsetWidth);

    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowWidth > 1024) {
      setItemsInSlider(5);
    }

    if (windowWidth < 1024) {
      setItemsInSlider(3);
    }
    if (windowWidth < 768) {
      setItemsInSlider(2);
    }

    setSliderIndex(0);
  };

  useEffect(() => getSliderWidth(), []);

  useEffect(() => {
    window.addEventListener('resize', getSliderWidth);
    return () => window.removeEventListener('resize', getSliderWidth);
  }, []);

  const getGapWidth = () => {
    return (
      (sliderWidth - (sliderWidth / itemsInSlider - 30) * itemsInSlider) /
      (itemsInSlider - 1)
    );
  };

  const getSliderTransition = () => {
    return sliderIndex * (sliderWidth + Math.floor(getGapWidth()));
  };

  return (
    <section className={styles.works} id="works">
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
            <Button text="Оставить заявку" mod={styles.button_big} />
          </div>
        </div>
        <div className={styles.slider} ref={sliderWrapper}>
          <ul
            className={styles.slider__wrapper}
            style={{
              gap: getGapWidth(),
              transform: `translateX(-${getSliderTransition()}px)`,
            }}
          >
            {workImages.map((work, index) => (
              <WorkSliderItem
                key={index}
                img={work}
                width={sliderWidth}
                itemsInSlider={itemsInSlider}
              />
            ))}
          </ul>

          <div className={styles.slider__dots}>
            {Array.from({ length: pages }).map((dot, index) => (
              <div
                className={cx(styles.slider__dot, {
                  [styles.slider__dot_active]: index === sliderIndex,
                })}
                key={index}
                data-page={index}
                onClick={(e) => {
                  setSliderIndex(Number(e.target.dataset.page));
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
