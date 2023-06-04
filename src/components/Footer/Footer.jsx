import { useState, useRef } from 'react';

import Title from '../Title/Title';
import Input from '../Input/Input';
import Bullit from '../Bullit/Bullit';
import { IconEmail, IconLocation, IconPhone } from '../Icons';

import styles from './Footer.module.css';

const bullitData = [
  {
    icon: <IconEmail />,
    text: 'breathwood@yandex.ru',
    modifier: styles.contacts__bullit,
  },
  {
    icon: <IconPhone />,
    text: '+7 (961) 252-18-19',
    modifier: styles.contacts__bullit,
  },
  {
    icon: <IconLocation />,
    text: 'г. Владимир, ул. Куйбышева, д. 26а',
    modifier: styles.contacts__bullit,
  },
];

const scriptUrl = process.env.REACT_APP_SCRIPT_URL;

function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: '',
    phone: '',
    username: '',
    question: '',
  });
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
      .then((res) => console.log('SUCCESSFULLY SUBMITTED'))
      .catch((err) => console.log(err));
  };

  return (
    <section className={styles.footer}>
      <div className={styles.contacts} id="contacts">
        <Title text="Свяжитесь с нами" mod={styles.contacts__title} />
        <p className={styles.contacts__txt}>
          Проконсультируем Вас по любому вопросу, касающихся создания Вашей
          мечты!
        </p>
        {bullitData.map((bull, index) => (
          <Bullit
            key={index}
            childred={bull.icon}
            bullTxt={bull.text}
            mod={bull.modifier}
          />
        ))}
        <p className={styles.contacts__info}>ИП Федулов Кирилл Дмитриевич</p>
        <p className={styles.contacts__info}>ИНН 330409163876</p>
      </div>
      <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.form__splittedline}>
          <Input
            labelTxt="Телефон"
            inputType="phone"
            inputName="phone"
            placeholderTxt="+7 (904) 000-00-00"
            mod={styles.form__input}
            inputValue={inputValues.email}
            inputHandler={(e) =>
              setInputValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <Input
            labelTxt="Email"
            inputType="email"
            inputName="email"
            placeholderTxt="andrea@gmail.com"
            mod={styles.form__input}
            inputValue={inputValues.phone}
            inputHandler={(e) =>
              setInputValues((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
        <Input
          labelTxt="Имя"
          inputType="text"
          inputName="username"
          placeholderTxt="Иван Петрович"
          mod={styles.form__input}
          inputValue={inputValues.username}
          inputHandler={(e) =>
            setInputValues((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <Input
          labelTxt="Ваш вопрос"
          inputType="text"
          inputName="question"
          placeholderTxt="Что вас интересует?"
          mod={styles.form__input}
          inputValue={inputValues.question}
          inputHandler={(e) =>
            setInputValues((prev) => ({ ...prev, question: e.target.value }))
          }
        />
        <div className={styles.form__submit}>
          <button className={styles.form__btn} type="submit">
            Отправить
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
    </section>
  );
}

export default Footer;
