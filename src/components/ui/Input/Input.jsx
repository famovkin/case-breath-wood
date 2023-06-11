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
  errors,
  isLoading,
  isErrorsVisible,
}) {
  return (
    <div className={cx(styles.input, { [mod]: mod })}>
      <label className={styles.input__label} htmlFor="explicit-label-name">
        {labelTxt}
      </label>
      <input
        className={cx(styles.input__field, {
          [styles.input__field_invalid]:
            errors.includes(inputName) && isErrorsVisible,
          [styles.input__field_loading]: isLoading,
        })}
        type={inputType}
        id={inputName}
        name={inputName}
        placeholder={placeholderTxt}
        value={inputValue}
        onChange={inputHandler}
        readOnly={isLoading}
      />
    </div>
  );
}

export default Input;
