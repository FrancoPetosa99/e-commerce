import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import CarritoControllers from "./CarritoControllers";
import {useHome} from "../components/Context/Producto.context";

function ProductoCard(props) {

    const {id, price, rate, image, title, stock} = props.Producto;

    const ButtonStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '0'
    }

    const StarsNumber = new Array(Math.round(rate));
    
    for (let i = 0; i < StarsNumber.length; i++) {
        StarsNumber[i] = i;
    }
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <CarritoControllers Producto={props.Producto}/>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{StarsNumber.map(Star => <StarFill fill="#f1c232"></StarFill>)}</ListGroup.Item>
                <ListGroup.Item>Precio: ${Math.round(price)}</ListGroup.Item>
                <ListGroup.Item>{stock > 0 ? 'Disponible' : 'Agotado'}</ListGroup.Item>
            </ListGroup>
            <Link to={`/Producto/${id}`}><Button style={ButtonStyle} variant="outline-primary">Ver detalle</Button></Link>
        </Card>
    );
}

export default ProductoCard;