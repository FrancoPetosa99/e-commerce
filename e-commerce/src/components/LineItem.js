import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import CarritoControllers from './CarritoControllers';
import { Trash } from "react-bootstrap-icons";
import {useHome} from "../components/Context/Producto.context";

function LineItem(props) {

    const Producto = props.Producto;
    const {InCarrito, SetCarrito, CantidadEnCarrito, SetCantidadEnCarrito} = useHome();

    const DeleteFromCarrito =(id)=> {
        const arrayAux = InCarrito.filter(Producto => Producto.id !== id);
        SetCarrito(arrayAux);
        SetCantidadEnCarrito(CantidadEnCarrito - 1);

    }

    return(
        <tr>
            <td><Button onClick={()=> {DeleteFromCarrito(Producto.id)}} variant='danger'><Trash/></Button></td>
            <td><CarritoControllers Producto={Producto}/></td>
            <td><Image className='carrito-producto-img' fluid='true' thumbnail='true' roundedCircle='true' rounded='true' src={Producto.image}/></td>
            <td>${Math.round(Producto.price * Producto.cantidad)}</td>
        </tr>
    )
}

export default LineItem;