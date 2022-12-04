import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { CartCheck } from "react-bootstrap-icons";
import {useHome} from "./Context/Producto.context";

function CarritoControllers(props) {

    const {id, category, description, price, rating, image, title, stock} = props.Producto;
    const {InCarrito, SetCarrito, CantidadEnCarrito, SetCantidadEnCarrito} = useHome();
    const [Cantidad, SetCantidad] = useState(0);

    useEffect(() => {
        SetCantidad(InCarrito.find(Producto => Producto.id === id) ? InCarrito.find(Producto => Producto.id === id).cantidad : 0);
    },[InCarrito]);

    const buttonControlStyle = {
        height: 'auto',
        width: '100%',
        display : 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '4px',
        margin: '8px'
    }

    const ButtonStyle = {
        height: '40px',
        width: '25px',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const buttonAddToCartStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        borderRadius: '0'
    }

    const BadgeStyle = {
        fontSize : '15px',
        borderRadius: '100%'
    }

    const ContainerStyle = {
        width: '100%',
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '0',
    }

    const handleAddToCart =()=>{

        let productoAux = InCarrito.find(Producto => Producto.id === id);
        
        if(!productoAux){
            const arrayAux = InCarrito;
            productoAux = {
                title: title,
                id: id,
                category: category,
                description: description,
                price: price,
                image: image,
                stock: stock,
                isInCarrito: false,
                rating: rating,
                cantidad: 1,
            };
            arrayAux.push(productoAux);
            SetCarrito(arrayAux);
            SetCantidad(Cantidad + 1);
            SetCantidadEnCarrito(CantidadEnCarrito + 1);
        }

    }

    const addToCarrito =()=>{
        SetCantidad(Cantidad + 1);
        const arrayAux = InCarrito.map(Producto => {
            if(Producto.id === id){
                Producto.cantidad++;
            }
            return Producto;
        })
        SetCarrito(arrayAux);
    }

    const removeFromCarrito =()=>{
        SetCantidad(Cantidad - 1);

        if(Cantidad === 1){
           
            SetCantidadEnCarrito(CantidadEnCarrito - 1);
            SetCarrito(InCarrito.filter(Producto => Producto.id !== id));
        }else{
            const arrayAux = InCarrito.map(Producto => {
                if(Producto.id === id){
                    Producto.cantidad--;
                }
                return Producto;
            })
            SetCarrito(arrayAux);
        }
    }

  return (
    <div style={ContainerStyle}>
        {
            Cantidad > 0
            ?<div style={buttonControlStyle}><Button style={ButtonStyle} onClick={removeFromCarrito} variant="outline-primary">-</Button> <Badge style={BadgeStyle} bg="primary">{Cantidad}</Badge><Button style={ButtonStyle} onClick={addToCarrito} variant="outline-primary">+</Button></div>
            :<Button style={buttonAddToCartStyle} onClick={handleAddToCart} size="sm" type="button"><CartCheck fontSize={20} /><b>Agregar al carrito</b></Button>
        }
    </div>
  );
}

export default CarritoControllers;