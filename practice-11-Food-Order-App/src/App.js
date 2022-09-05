import {Header} from './components/Layout/Header/Header';
import {Meals} from './components/Meals/Meals';
import {Cart} from './components/Cart/Cart';

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
      <Cart />
    </>
  );
}

export default App;
