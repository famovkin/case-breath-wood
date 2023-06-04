import cx from 'classnames';

import styles from './Title.module.css';

function Title({ text, mod }) {
  return (
    <h2
      className={cx(styles.title, {
        [mod]: mod,
      })}
    >
      {text}
    </h2>
  );
}

export default Title;
