import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/navbar/Navb';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrito from './components/Carrito';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Producto from './pages/Producto';
import {ProductoProvider} from './components/Context/Producto.context';
import Payment from './pages/Payment';

function App() {

  const [Productos, SetProductos] = useState([]);
  const [InCarrito, SetCarrito] = useState([]);
  const [ShowCart, SetShowCart] = useState(false);
  const [CantidadEnCarrito, SetCantidadEnCarrito] = useState(InCarrito.length);

  return (
    <ProductoProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Contacto' element={<Contacto/>} />
            <Route exact path='/Producto/:id' element={<Producto CantidadEnCarrito={CantidadEnCarrito} SetCantidadEnCarrito={SetCantidadEnCarrito} InCarrito={InCarrito} SetCarrito={SetCarrito} Productos={Productos}/>} />
            <Route exact path='/Payment' element={<Payment/>} />  
          </Routes>
        </BrowserRouter>
      </div>
    </ProductoProvider>
  );
}

export default App;
