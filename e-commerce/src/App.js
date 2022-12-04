import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import ProductoDetail from './pages/ProductoDetail';
import ProductoRelate from './pages/ProductoRelate';
import {ProductoProvider} from './components/Context/Producto.context';
import Payment from './pages/Payment';
import Search from './pages/Search';

function App() {

  return (
    <ProductoProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Contacto' element={<Contacto/>} />
            <Route exact path='/ProductoDetail/:id' element={<ProductoDetail />} />
            <Route exact path='/ProductoRelate/:category' element={<ProductoRelate />} />
            <Route exact path='/Payment' element={<Payment/>} />
            <Route exact path='/Search/:filter' element={<Search/>} />  
          </Routes>
        </BrowserRouter>
      </div>
    </ProductoProvider>
  );
}

export default App;
