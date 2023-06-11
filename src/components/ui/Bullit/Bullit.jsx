import cx from 'classnames';

import styles from './Bullit.module.css';

function Bullit({ bullTxt, childred, mod }) {
  return (
    <div className={cx(styles.bullit, { [mod]: mod })}>
      {childred}
      <p className={styles.bullit__txt}>{bullTxt}</p>
    </div>
  );
}

export default Bullit;
