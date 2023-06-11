import { Bullit, Title } from '../ui';
import { IconEmail, IconLocation, IconPhone } from '../Icons';

import styles from './Contacts.module.css';

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

function Contacts() {
  return (
    <div className={styles.contacts} id="contacts">
      <Title text="Свяжитесь с нами" mod={styles.contacts__title} />
      <p className={styles.contacts__txt}>
        Проконсультируем Вас по любому вопросу, касающихся создания Вашей мечты!
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
  );
}

export default Contacts;
