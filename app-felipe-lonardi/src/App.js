import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import FunctionCounter from './components/Counter/counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer  /*greeting={"Hola Mundo"}*/ />
      <ItemDetailContainer/>


      <footer id="colophon" className="site-footer" role="contentinfo">
         <div className="social-wrapper">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/twitter-256.png" alt="Twitter Logo" class="twitter-icon"/></a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="https://www.pngplay.com/wp-content/uploads/13/Black-And-White-Instagram-Logo-PNG-Pic-Background.png" alt="Instagram Logo" class="instagram-icon"/></a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/facebook_online_social_media-256.png" alt="Facebook Logo" class="facebook-icon"/></a>
              </li>
            </ul>
            <h2 className='created'>Created by Felipe Lonardi @ React.js</h2>
          </div>
       </footer>
    </div>

  );
}

export default App;
