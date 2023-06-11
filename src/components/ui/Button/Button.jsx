import cx from 'classnames';

import styles from './Button.module.css';

function Button({ text, handler, mod }) {
  return (
    <button
      className={cx(styles.button, {
        [mod]: mod,
      })}
      onClick={handler}
    >
      {text}
    </button>
  );
}

export default Button;
