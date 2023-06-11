import { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

import { Button } from '../ui';
import { WorkSliderItem } from '../../components';

import styles from './Works.module.css';
import preview from '../../img/preview.jpg';

const BASE_URL = 'https://famovkin.github.io/case-breath-wood/';
const GAP_WIDTH = 30;

const goToAnchor = (idSection) => {
  const section = document.getElementById(idSection);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

const workImages = [
  `${BASE_URL}wood_1.jpg`,
  `${BASE_URL}wood_2.jpg`,
  `${BASE_URL}wood_3.jpg`,
  `${BASE_URL}wood_4.jpg`,
  `${BASE_URL}wood_5.jpg`,
  `${BASE_URL}wood_6.jpg`,
  `${BASE_URL}wood_7.jpg`,
  `${BASE_URL}wood_8.jpg`,
  `${BASE_URL}wood_9.jpg`,
  `${BASE_URL}wood_10.jpg`,
  `${BASE_URL}wood_11.jpg`,
  `${BASE_URL}wood_12.jpg`,
  `${BASE_URL}wood_13.jpg`,
  `${BASE_URL}wood_14.jpg`,
  `${BASE_URL}wood_15.jpg`,
  `${BASE_URL}wood_16.jpg`,
  `${BASE_URL}wood_17.jpg`,
  `${BASE_URL}wood_18.jpg`,
  `${BASE_URL}wood_19.jpg`,
  `${BASE_URL}wood_20.jpg`,
];

function Works() {
  const [touchPosition, setTouchPosition] = useState(null);
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
  //   console.log('currPage', sliderIndex);
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
      setItemsInSlider(4);
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

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      if (sliderIndex < pages - 1) setSliderIndex((prev) => prev + 1);
    }

    if (diff < -5) {
      if (sliderIndex !== 0) setSliderIndex((prev) => prev - 1);
    }

    setTouchPosition(null);
  };

  const handleClickStart = (e) => {
    const clickX = e.clientX;
    setTouchPosition(clickX);
  };

  const handleClickMove = (e) => {
    const clickDown = touchPosition;

    if (clickDown === null) {
      return;
    }

    const currentClick = e.clientX;
    const diff = clickDown - currentClick;

    if (diff > 5) {
      if (sliderIndex < pages - 1) setSliderIndex((prev) => prev + 1);
    }

    if (diff < -5) {
      if (sliderIndex !== 0) setSliderIndex((prev) => prev - 1);
    }

    setTouchPosition(null);
  };

  const getGapWidth = () => {
    return (
      (sliderWidth - (sliderWidth / itemsInSlider - GAP_WIDTH) * itemsInSlider) /
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
            <Button text="Оставить заявку" mod={styles.button_big} handler={() => goToAnchor("contacts")}/>
          </div>
        </div>
        <div
          className={styles.slider}
          ref={sliderWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleClickStart}
          onMouseUp={handleClickMove}
        >
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
                gap={GAP_WIDTH}
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
