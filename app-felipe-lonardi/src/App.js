import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import FunctionCounter from './components/Counter/counter';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Hola Mundo"} />
    </div>
  );
}

export default App;
