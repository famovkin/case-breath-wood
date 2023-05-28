import cx from 'classnames';

import styles from './Button.module.css';

function Button({ text, mod }) {
  return (
    <button
      className={cx(styles.button, {
        [styles.button_big]: mod,
      })}
    >
      {text}
    </button>
  );
}

export default Button;
