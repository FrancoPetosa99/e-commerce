import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import CarritoControllers from './CarritoControllers';
import {useHome} from "../components/Context/Producto.context";
import {Link} from 'react-router-dom';

function Carrito() {

    const {InCarrito, SetCarrito, CantidadEnCarrito, SetCantidadEnCarrito, ShowCart, SetShowCart} = useHome();
    const handleClose = () => SetShowCart(false);

    const ButtonStyle = {
        width: '100%',
        marginTop: '1rem'
    }
 
    return (
        <Offcanvas show={ShowCart} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
                {
                    InCarrito.map(Producto => {
                        return(
                            <ListGroup as="ol">
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <Image className='carrito-producto-img' fluid='true' thumbnail='true' roundedCircle='true' rounded='true' src={Producto.image}/>
                                    <CarritoControllers Producto={Producto} />
                                    <Badge bg="primary" pill>${Math.round(Producto.price * Producto.cantidad)}</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })
                }
                {
                    CantidadEnCarrito > 0
                    ?
                    <Link to={'/Payment'}>
                        <Button style={ButtonStyle} variant="primary">Ir a Pagar 
                            ${Math.round(InCarrito.reduce((prevTotal,Producto) => {
                                return prevTotal + Producto.price * Producto.cantidad
                            }, 0))}
                        </Button>
                    </Link>
                    :
                    <h4>Su carrito se encuentra vacío</h4>
                }
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Carrito;