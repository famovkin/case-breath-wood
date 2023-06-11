import styles from './Comment.module.css';

const GAP_WIDTH_MIN = 10;

function Comment({ feedbackData, width, itemsInSlider, gap }) {
  const getCommentWidth = () => {
    if (itemsInSlider === 1) return width - GAP_WIDTH_MIN;
    return width / itemsInSlider - gap;
  };

  const { avatar, name, text } = feedbackData;
  return (
    <div
      className={styles.comment}
      style={{
        width: getCommentWidth(),
      }}
    >
      <div className={styles.comment__header}>
        <img
          className={styles.comment__avatar}
          src={avatar}
          alt="Фотография автора комментария"
        />
        <p className={styles.comment__name}>{name}</p>
      </div>
      <p
        className={styles.comment__text}
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
}

export default Comment;
