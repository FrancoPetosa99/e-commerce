import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

function LineItem(props) {

    const Producto = props.Producto

    const buttonControlStyle = {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px'
    }

    const addItem =(Producto)=> {
        console.log(Producto.price);
    }

    return(
        <tr>
            <td><div style={buttonControlStyle}><Button variant="outline-primary">-</Button><Button variant="outline-primary" onClick={addItem(Producto)}>+</Button></div></td>
            <td><Image className='carrito-producto-img' fluid='true' thumbnail='true' roundedCircle='true' rounded='true' src={Producto.image}/><Badge pill bg="primary">x{Producto.cantidad}</Badge></td>
            <td>${Math.round(Producto.price * Producto.cantidad)}</td>
        </tr>
    )
}

export default LineItem;