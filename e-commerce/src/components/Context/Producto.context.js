import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDocs, collection } from 'firebase/firestore';

const ProductoContext = React.createContext();

export function ProductoProvider(props){

    const [Productos, SetProductos] = useState([]);
    const [InCarrito, SetCarrito] = useState([]);
    const [ShowCart, SetShowCart] = useState(false);
    const [CantidadEnCarrito, SetCantidadEnCarrito] = useState(InCarrito.length);
    const [ProductosAreReady, SetProductosAreReady] = useState(false);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(data => {
    //       SetProductos(data.map((producto, i) => {
    //         producto.stock = i + 4;
    //         return producto;
    //       }))
    //       setTimeout(() => {
    //         SetProductosAreReady(true);
    //       }, 2500);
    //     })
    //     .then(() => console.log(Productos))
    //     .catch((e) => console.log(e));
    
    // },[]);

    useEffect(()=> {
      const db = getFirestore();
      const getProductsCollection = collection(db, 'products');
      getDocs(getProductsCollection)
      .then((data) => {
        const products = data.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        SetProductos(products);
        setTimeout(() => {
          SetProductosAreReady(true);
        }, 2500);
      })
    }, []);

    const value = {
      Productos, SetProductos,
      InCarrito, SetCarrito,
      ShowCart, SetShowCart,
      CantidadEnCarrito, SetCantidadEnCarrito,
      ProductosAreReady
        
    }
    return <ProductoContext.Provider value={value} {...props} />;
}

export function useHome() {
    const context = React.useContext(ProductoContext);
    if (!context) {
      throw new Error("Something wrong have happended");
    }
    return context;
}