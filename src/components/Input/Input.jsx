import cx from 'classnames';

import styles from './Input.module.css';

function Input({
  labelTxt,
  inputName,
  inputType,
  placeholderTxt,
  mod,
  inputValue,
  inputHandler,
}) {
  return (
    <div className={cx(styles.input, { [mod]: mod })}>
      <label className={styles.input__label} htmlFor="explicit-label-name">
        {labelTxt}
      </label>
      <input
        className={styles.input__field}
        type={inputType}
        id={inputName}
        name={inputName}
        placeholder={placeholderTxt}
        value={inputValue}
        onChange={inputHandler}
      />
    </div>
  );
}

export default Input;
