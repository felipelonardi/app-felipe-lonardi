import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/about' element={<h1>About</h1>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            </Routes>
            
       </BrowserRouter>  

      
    </div>

  );
}

export default App;
