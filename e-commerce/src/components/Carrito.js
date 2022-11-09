import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Carrito(props) {

    const {ShowCart, SetShowCart, InCarrito, SetCarrito} = props;
    const handleClose = () => SetShowCart(false);

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
    
    
    return (
        <Offcanvas show={ShowCart} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    InCarrito.map(Producto => {
                        return(
                            <ListGroup as="ol">
                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                    <Image className='carrito-producto-img' fluid='true' thumbnail='true' roundedCircle='true' rounded='true' src={Producto.image}/>
                                    <div style={buttonControlStyle}><Button variant="outline-primary">-</Button> <Badge style={BadgeStyle} bg="primary">{Producto.cantidad}</Badge><Button  variant="outline-primary">+</Button></div>
                                    <Badge bg="primary" pill>${Math.round(Producto.price * Producto.cantidad)}</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        )
                    })
                }
                <Button variant="primary">Ir a Pagar 
                    ${Math.round(InCarrito.reduce((prevTotal,Producto) => {
                        return prevTotal + Producto.price * Producto.cantidad
                    }, 0))}
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Carrito;