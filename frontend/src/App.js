import logo from './logo.svg';
import './App.css';

import  Home  from './component/home';
import Header from './component/navbar';
import Product from './component/product';
import Slide from './component/slide';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slide/>
      <Product/>
      <Home/>
    </div>
  );
}

export default App;
