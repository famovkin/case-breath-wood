import cx from 'classnames';
import { useState, useEffect, useRef } from 'react';

import styles from './Feedback.module.css';

import arrowLeft from '../../img/arrow-left.png';
import arrowRight from '../../img/arrow-right.png';

import { Comment } from '../../components';
import { Title } from '../ui/index';

const publicUrl = process.env.PUBLIC_URL;

const comments = [
  {
    avatar: `${publicUrl}/avatar_1.jpg`,
    name: 'Евгений',
    text: `Заказывали в данной мастерской такую кроватку.
    </br>
    </br>
  Изготовление заняло примерно недели 3, но оно того стоило! качество очень хорошее, нам очень понравилось, все доходчиво объяснили, как если что разбирать и собирать, сборка и установка бесплатная. Однозначно рекомендую!
  </br>
  </br>
  Еще раз большое спасибо!`,
  },
  {
    avatar: `${publicUrl}/avatar_2.jpg`,
    name: 'Виктория',
    text: `Очень качественная кровать-домик, как раз подходит мне по размерам и габаритам. Кровать из натурального дерева, устойчивая и прочная.
    </br>
    </br>
  Довольна покупкой, спасибо!`,
  },
  {
    avatar: `${publicUrl}/avatar_1.jpg`,
    name: 'Евгений',
    text: `Заказывали в данной мастерской такую кроватку.
  Изготовление заняло примерно недели 3, но оно того стоило! качество очень хорошее, нам очень понравилось, все доходчиво объяснили, как если что разбирать и собирать, сборка и установка бесплатная. Однозначно рекомендую!
  Еще раз большое спасибо!`,
  },
  {
    avatar: `${publicUrl}/avatar_2.jpg`,
    name: 'Виктория',
    text: `Очень качественная кровать-домик, как раз подходит мне по размерам и габаритам. Кровать из натурального дерева, устойчивая и прочная.
  Довольна покупкой, спасибо!`,
  },
  {
    avatar: `${publicUrl}/avatar_1.jpg`,
    name: 'Евгений',
    text: `Заказывали в данной мастерской такую кроватку.
  Изготовление заняло примерно недели 3, но оно того стоило! качество очень хорошее, нам очень понравилось, все доходчиво объяснили, как если что разбирать и собирать, сборка и установка бесплатная. Однозначно рекомендую!
  Еще раз большое спасибо!`,
  },
  {
    avatar: `${publicUrl}/avatar_2.jpg`,
    name: 'Виктория',
    text: `Очень качественная кровать-домик, как раз подходит мне по размерам и габаритам. Кровать из натурального дерева, устойчивая и прочная.
  Довольна покупкой, спасибо!`,
  },
];

const GAP_WIDTH = 30;

function Feedback() {
  const [touchPosition, setTouchPosition] = useState(null);
  const [itemsInSlider, setItemsInSlider] = useState(2);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [pages, setPages] = useState(0);
  const sliderWrapper = useRef(null);

  const getSliderWidth = () => {
    if (sliderWrapper) setSliderWidth(sliderWrapper.current.offsetWidth);

    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowWidth < 768) {
      setItemsInSlider(1);
      return;
    }

    setItemsInSlider(2);
    setSliderIndex(0);
  };

  useEffect(() => getSliderWidth(), []);

  useEffect(() => {
    window.addEventListener('resize', getSliderWidth);
    return () => window.removeEventListener('resize', getSliderWidth);
  }, []);

  useEffect(() => {
    const updatedPages = comments.length / itemsInSlider;
    setPages(updatedPages);
  }, [itemsInSlider]);

  const getGapWidth = () => {
    if (itemsInSlider === 1) {
      return sliderWidth - (sliderWidth / itemsInSlider - 10) * itemsInSlider;
    }

    return (
      (sliderWidth - (sliderWidth / itemsInSlider - GAP_WIDTH) * itemsInSlider) /
      (itemsInSlider - 1)
    );
  };

  const getSliderTransition = () => {
    if (itemsInSlider === 1) {
      return sliderIndex && sliderIndex * sliderWidth - 9;
    }
    return sliderIndex * (sliderWidth + Math.floor(getGapWidth()));
  };

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

  return (
    <section className={styles.feedback} id="feed">
      <div className={styles.feedback__header}>
        <Title text="Отзывы о нас" />
        <div className={styles.feedback__arrows}>
          <img
            className={cx(styles.feedback__arrow, {
              [styles.feedback__arrow_disabled]: sliderIndex === 0,
            })}
            src={arrowLeft}
            alt="Левая стрелка"
            onClick={() => {
              setSliderIndex((prev) => prev - 1);
            }}
          />
          <img
            className={cx(styles.feedback__arrow, {
              [styles.feedback__arrow_disabled]: sliderIndex === pages - 1,
            })}
            src={arrowRight}
            alt="Правая стрелка"
            onClick={() => {
              setSliderIndex((prev) => prev + 1);
            }}
          />
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
        {pages && (
          <ul
            className={styles.slider__wrapper}
            style={{
              width: sliderWidth * comments.length,
              gap: getGapWidth(),
              transform: `translateX(-${getSliderTransition()}px)`,
            }}
          >
            {comments.map((item, index) => (
              <Comment
                feedbackData={item}
                key={index}
                width={sliderWidth}
                itemsInSlider={itemsInSlider}
                gap={GAP_WIDTH}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Feedback;
