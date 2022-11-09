import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';

function ProductoCard(props) {

    const {id, category, description, price, rating, image, title, stock} = props.Producto;
    const [ProductoInCarrito, SetProductoInCarrito] = useState({
        title: title,
        id: id,
        category: category,
        description: description,
        price: price,
        image: image,
        stock: stock,
        isInCarrito: false,
        rating: rating,
        cantidad: 0,
    });

    const {InCarrito, SetCarrito, CantidadEnCarrito, SetCantidadEnCarrito} = props;
    const [Cantidad, SetCantidad] = useState(0);

    const buttonControlStyle = {
        height: 'auto',
        width: '100%',
        display : 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '4px',
        margin: '8px'
    }

    const BadgeStyle = {
        fontSize : '15px',
        borderRadius: '100%'
    }

    const ButtonStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '0'
    }

    //const StarsNumber = new Array(Math.round(rating.rate));
    const StarsNumber = [1,2,3];

    const handleAddToCart =()=>{
        const arrAux = InCarrito;
        if(!ProductoInCarrito.isInCarrito){
            ProductoInCarrito.isInCarrito = true;
            ProductoInCarrito.cantidad ++;
            SetProductoInCarrito(ProductoInCarrito);
            arrAux.push(ProductoInCarrito);
            SetCarrito(arrAux);
            SetCantidad(Cantidad + 1);
            SetCantidadEnCarrito(CantidadEnCarrito + 1)
        }
    }

    const addToCarrito =()=>{
        SetCantidad(Cantidad + 1);
        ProductoInCarrito.cantidad++;
        SetProductoInCarrito(ProductoInCarrito);
    }

    const removeFromCarrito =()=>{
        SetCantidad(Cantidad - 1);
        ProductoInCarrito.cantidad--;
        SetProductoInCarrito(ProductoInCarrito);
        if(Cantidad === 1){
            ProductoInCarrito.isInCarrito = false;
            SetCantidadEnCarrito(CantidadEnCarrito - 1);
            SetCarrito(InCarrito.filter(Producto => Producto.id !== ProductoInCarrito.id));
        }
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            {
                Cantidad > 0
                ?<div style={buttonControlStyle}><Button onClick={removeFromCarrito} variant="outline-primary">-</Button> <Badge style={BadgeStyle} bg="primary">{Cantidad}</Badge><Button onClick={addToCarrito} variant="outline-primary">+</Button></div>
                :<Button onClick={handleAddToCart} size="sm" as="input" type="button" value="Add to cart" />
            }
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{StarsNumber.map(Star => <StarFill></StarFill>)}</ListGroup.Item>
                <ListGroup.Item>Precio: ${Math.round(price)}</ListGroup.Item>
                <ListGroup.Item>{stock > 0 ? 'Disponible' : 'Agotado'}</ListGroup.Item>
            </ListGroup>
            <Link to={`/Producto/${id}`}><Button style={ButtonStyle} variant="outline-primary">Ver detalle</Button></Link>
        </Card>
    );
}

export default ProductoCard;