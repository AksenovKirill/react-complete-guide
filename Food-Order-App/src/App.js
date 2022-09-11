import {Header} from './components/Layout/Header/Header';
import {Meals} from './components/Meals/Meals';
import {Cart} from './components/Cart/Cart';
import {useState} from 'react';

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const handleOpenCart = () => {
    setIsOpenCart(true);
  };
  const handleCloseCart = () => {
    setIsOpenCart(false);
  };
  return (
    <>
      <Header onShow={handleOpenCart} />
      <main>
        <Meals />
      </main>
      <Cart isShowCart={isOpenCart} onClose={handleCloseCart} />
    </>
  );
}

export default App;
