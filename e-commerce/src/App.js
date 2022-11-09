import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import { useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrito from './components/Carrito';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Producto from './pages/Producto';

function App() {

  const [Productos, SetProductos] = useState([]);
  const [InCarrito, SetCarrito] = useState([]);
  const [ShowCart, SetShowCart] = useState(false);
  const [CantidadEnCarrito, SetCantidadEnCarrito] = useState(InCarrito.length);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      SetProductos(data.map((producto, i) => {
        producto.stock = i + 4;
        return producto;
      }))
      console.log(Productos);
    })
    .catch((e) => console.log(e));

  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar CantidadEnCarrito={CantidadEnCarrito} ShowCart={ShowCart} SetShowCart={SetShowCart}/>
      <Carrito CantidadEnCarrito={CantidadEnCarrito} SetCantidadEnCarrito={SetCantidadEnCarrito} InCarrito={InCarrito} SetCarrito={SetCarrito} ShowCart={ShowCart} SetShowCart={SetShowCart}/>
        <Routes>
          <Route exact path='/' element={<Home CantidadEnCarrito={CantidadEnCarrito} SetCantidadEnCarrito={SetCantidadEnCarrito} InCarrito={InCarrito} SetCarrito={SetCarrito} Productos={Productos}/>}/>
          <Route exact path='/Contacto' element={<Contacto/>} />
          <Route exact path='/Producto/:id' element={<Producto Productos={Productos}/>} />
          
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
