import {Header} from './components/Layout/Header/Header';
import {Meals} from './components/Meals/Meals';
import {Modal} from './components/UI/Modal/Modal';
import {Cart} from './components/Cart/Cart';

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
