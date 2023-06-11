import { useState, useRef, useEffect } from 'react';

import { Input } from '../ui';

import styles from './Form.module.css';

const scriptUrl = process.env.REACT_APP_SCRIPT_URL;

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorsVisible, setIsErrorsVisible] = useState(false);
  const [errors, setErrors] = useState([]);
  const [inputValues, setInputValues] = useState({
    email: '',
    phone: '',
    username: '',
    question: '',
  });
  const formRef = useRef(null);

  const handleSubmit = () => {
    setIsErrorsVisible(true);
    const isInputsEmpty = Object.values(inputValues).includes('');

    if (!isInputsEmpty) {
      setIsErrorsVisible(true);
      setIsLoading(true);
      fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
        .then(() => resetForm())
        .catch((err) => console.log(err));
    }
  };

  const resetForm = () => {
    setInputValues({
      email: '',
      phone: '',
      username: '',
      question: '',
    });
    setIsLoading(false);
    setIsErrorsVisible(false);
  };

  useEffect(() => {
    const errorsArray = [];
    const inputs = Object.keys(inputValues);
    inputs.forEach((inputName) => {
      if (!inputValues[inputName]) errorsArray.push(inputName);
    });
    setErrors(errorsArray);
  }, [inputValues]);

  return (
    <form className={styles.form} ref={formRef}>
      <div className={styles.form__splittedline}>
        <Input
          labelTxt="Телефон"
          inputType="phone"
          inputName="phone"
          placeholderTxt="+7 (904) 000-00-00"
          mod={styles.form__input}
          inputValue={inputValues.phone}
          inputHandler={(e) => {
            setInputValues((prev) => ({ ...prev, phone: e.target.value }));
          }}
          errors={errors}
          isLoading={isLoading}
          isErrorsVisible={isErrorsVisible}
        />
        <Input
          labelTxt="Email"
          inputType="email"
          inputName="email"
          placeholderTxt="andrea@gmail.com"
          mod={styles.form__input}
          inputValue={inputValues.email}
          inputHandler={(e) => {
            setInputValues((prev) => ({ ...prev, email: e.target.value }));
          }}
          errors={errors}
          isLoading={isLoading}
          isErrorsVisible={isErrorsVisible}
        />
      </div>
      <Input
        labelTxt="Имя"
        inputType="text"
        inputName="username"
        placeholderTxt="Иван Петрович"
        mod={styles.form__input}
        inputValue={inputValues.username}
        inputHandler={(e) => {
          setInputValues((prev) => ({ ...prev, username: e.target.value }));
        }}
        errors={errors}
        isLoading={isLoading}
        isErrorsVisible={isErrorsVisible}
      />
      <Input
        labelTxt="Ваш вопрос"
        inputType="text"
        inputName="question"
        placeholderTxt="Что вас интересует?"
        mod={styles.form__input}
        inputValue={inputValues.question}
        inputHandler={(e) => {
          setInputValues((prev) => ({ ...prev, question: e.target.value }));
        }}
        errors={errors}
        isLoading={isLoading}
        isErrorsVisible={isErrorsVisible}
      />
      <div className={styles.form__submit}>
        <button
          className={styles.form__btn}
          type="button"
          onClick={handleSubmit}
        >
          {isLoading ? 'Загрузка...' : 'Отправить'}
        </button>
        <p className={styles.form__policy}>
          Нажимая кнопку, я принимаю{' '}
          <a
            className={styles.form__link}
            href="http://google.com"
            target="_blank"
            rel="noreferrer"
          >
            соглашение о конфиденциальности
          </a>{' '}
          и соглашаюсь с обработкой персональных данных
        </p>
      </div>
    </form>
  );
}

export default Form;
