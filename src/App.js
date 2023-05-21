import './App.css';
import logo from './img/logo.png';

import Button from './components/Button/Button';
import BannerWithLogo from './components/BannerWithLogo/BannerWithLogo';
import Features from './components/Features/Features';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="" className="header__logo" />
        <nav className="nav">
          <ul>
            <li className="nav__item">О нас</li>
            <li className="nav__item">Наши работы</li>
            <li className="nav__item">Отзывы</li>
            <li className="nav__item">Контакты</li>
          </ul>
        </nav>
        <p>+7 (904) 657-32-60</p>
        <Button text="Заказать звонок" />
      </header>
      <BannerWithLogo />
      <Features />
      <Banner />
    </div>
  );
}

export default App;
