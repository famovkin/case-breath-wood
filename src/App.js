import { useState } from 'react';

import {
  BannerWithLogo,
  Features,
  Menu,
  Banner,
  Products,
  Works,
  Footer,
  Feedback,
  Header,
} from './components';

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="app">
      <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <Header isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
      <BannerWithLogo />
      <Features />
      <Banner />
      <Products />
      <Works />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
