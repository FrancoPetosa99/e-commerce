import React from "react";
import {useHome} from "../components/Context/Producto.context";
import { CartCheck } from "react-bootstrap-icons";
import Badge from 'react-bootstrap/Badge';

function CarritoBtnFloat() {

    const containerStyle = {
        height: '3.5rem',
        width: '3.5rem',
        borderRadius: '50%',
        backgroundColor: '#0d6efd',
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999'
    }

    const wrapperStyle = {
        position: 'relative',
        with: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const cantidadStyle = {
        borderRadius: '50%',
        position: 'absolute',
        top: '-0.5rem',
        right: '-0.5rem'
    }

    const {ShowCart, SetShowCart, CantidadEnCarrito} = useHome();

    const handleShowCart =()=> {
        SetShowCart(!ShowCart);
    }
    
    return (
        <div onClick={handleShowCart} style={containerStyle}>
            <div style={wrapperStyle}>
                <CartCheck fill="white" fontSize={25}/>
                {
                    CantidadEnCarrito > 0 &&
                    <Badge style={cantidadStyle} bg="danger">{CantidadEnCarrito}</Badge>

                }
            </div>
        </div>
    );
}

export default CarritoBtnFloat;