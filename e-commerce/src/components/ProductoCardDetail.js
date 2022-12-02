import React from "react";
import Badge from 'react-bootstrap/Badge';
import CarritoControllers from "./CarritoControllers";

function ProductoCardDetail(props) {

    const {Producto} = props;

    const bootstrapStyle = {
        maxWidth: '900px',
        overflow: 'hidden'
    }

    const CardBody = {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
    }

    const PriceStyle = {
        height: '40px',
        width: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px',
        position: 'absolute',
        top: '0px',
        right: '-20px',
        transform: 'rotateZ(25deg)',
        borderRadius: '0px'
    }

    const calcularDescuento =(price)=> {
        return (price * 0.25).toFixed(2);
    }
    
    return (
        <div className="card mb-3" style={bootstrapStyle}>
            <Badge style={PriceStyle} bg="danger">25% off</Badge>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Producto.image} className="img-fluid rounded-start" alt="Producto"/>
                </div>
                <div className="col-md-7">
                    <div style={CardBody} className="card-body">
                        <h5 className="card-title">{Producto.title}</h5>
                        <p className="card-text">{Producto.description}</p>
                        <div className="card-text">
                            <h5>${calcularDescuento(Producto.price)}</h5>
                            <h6>$<del>{Producto.price}</del></h6>
                        </div>
                        <CarritoControllers Producto={Producto}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ProductoCardDetail;