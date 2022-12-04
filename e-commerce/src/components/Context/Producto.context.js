import React, { useState, useEffect } from "react";
import { getFirestore, getDocs, collection, query, where, addDoc, updateDoc, doc } from 'firebase/firestore';

const ProductoContext = React.createContext();

export function ProductoProvider(props){

  //estados
    const [Productos, SetProductos] = useState([]);
    const [InCarrito, SetCarrito] = useState([]);
    const [ShowCart, SetShowCart] = useState(false);
    const [CantidadEnCarrito, SetCantidadEnCarrito] = useState(InCarrito.length);
    const [ProductosAreReady, SetProductosAreReady] = useState(false);
    const [Filter, SetFilter] = useState('');
    const [FilteredProducts, SetFilteredProducts] = useState([]);
    const [Categories, SetCategories] = useState([]);
    const [IsFetchingData, SetIsFechingData] = useState(true);
    const [ClientData, SetClientData] = useState({
      ClientName: '',
      ClientLastName: '',
      ClientAddress: '',
      ClientEmail: '',
      ClientComments: ''
    });

    //funciones auxiliares
    const getCurrentDate =()=> {
      //format DD/MM/YYYY
      const currentDate = new Date();
      const day = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
      const month = currentDate.getMonth() + 1 < 10 ? '0' + currentDate.getMonth() + 1 : currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      return `${day}/${month}/${year}`
    }

    const getTotalToPay =()=> {
      return Math.round(InCarrito.reduce((prevTotal,Producto) => {
        return prevTotal + Producto.price * Producto.cantidad
      }, 0))
    }

    const getProductsFromCarrito =()=> {
      return InCarrito.map(Producto => {
        const objProduct = {};
        objProduct.title = Producto.title;
        objProduct.price = Producto.price;
        objProduct.amount = Producto.cantidad;
        objProduct.subTotal = Producto.cantidad * Producto.price;
        objProduct.id = Producto.id;
        return objProduct;
      })
    }

    //fetch products from firebase db
    //fetch categories from firebase db
    useEffect(()=> {

      const db = getFirestore();

      const getProductsCollection = collection(db, 'products');
      const getCategoriesCollection = collection(db, 'categories');

      Promise.allSettled([
        getDocs(getProductsCollection),
        getDocs(getCategoriesCollection)
      ])
      .then((Promises) => {
        
        if(Promises[0].status === 'fulfilled'){
          const products = Promises[0].value.docs.map((doc) => ({id: doc.id, ...doc.data()}));
          SetProductos(products);
        }

        if(Promises[1].status === 'fulfilled'){
          const categories = Promises[1].value.docs.map((doc) => ({id: doc.id, ...doc.data()}));
          SetCategories(categories);
        }

        console.log(Productos);

        setTimeout(() => {
          SetProductosAreReady(true);
        }, 2500);
      })
    }, []);

    //fetch products filtered from firebase db
    //the filter condition is stated by the user
    const getFilteredProducts =()=> {

      SetIsFechingData(true);

      const db = getFirestore();

      const q = query(
        collection(db, 'products'),
        where('title', '==', Filter)
      );

      getDocs(q)
      .then((data) => {
        const filteredProducts = data.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        SetFilteredProducts(filteredProducts);
        SetFilter('');

        setTimeout(()=> {
          SetIsFechingData(false);
        }, 2500)
      })
    }

    //send to db the selling
    const submitSelling = ()=>{

      const selling = {
        address: ClientData.ClientAddress,
        client: ClientData.ClientName + ' ' + ClientData.ClientLastName,
        products: getProductsFromCarrito(),
        total: getTotalToPay(),
        date: getCurrentDate()
      }

      const db = getFirestore();

      const getSellingsCollection = collection(db, 'sellings');

      addDoc(getSellingsCollection, selling)
      .then((data) => console.log(data.id))
      .then(()=> updateStock())

    }

    //update the stock of the products on firebase db
    const updateStock =()=> {

      const db = getFirestore();

      Promise.all(InCarrito.map(product => {
        const getProductDoc = doc(db, 'products', product.id);
        return updateDoc(getProductDoc, {stock: product.stock - product.cantidad})
      }))
      .then(()=> console.log("Se actualizaron los productos"))
      .catch((error)=> console.log(error))

    }

    const value = {
      Productos, SetProductos,
      InCarrito, SetCarrito,
      ShowCart, SetShowCart,
      CantidadEnCarrito, SetCantidadEnCarrito,
      ProductosAreReady,
      Filter, SetFilter,
      getFilteredProducts,
      FilteredProducts, SetFilteredProducts,
      Categories, SetCategories,
      IsFetchingData, SetIsFechingData,
      ClientData, SetClientData,
      submitSelling,
        
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