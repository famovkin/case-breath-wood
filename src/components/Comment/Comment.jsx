import styles from './Comment.module.css';

function Comment({ feedbackData, width, itemsInSlider }) {
  const getCommentWidth = () => {
    if (itemsInSlider === 1) return width - 10;
    return width / itemsInSlider - 30;
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
