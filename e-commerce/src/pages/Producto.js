import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { StarFill } from 'react-bootstrap-icons';

function Producto(props) {

    const bootstrapStyle = {
        maxWidth: '900px'
    }

    const ContainerStyle = {
        height:'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0px 0px 0px'
    }

    const {Productos} = props;
    const id =JSON.parse(useParams().id);

    const [Producto, SetProducto] = useState(Productos.find(Producto => {
        return Producto.id === id
    }))
    
    return(
        <div style={ContainerStyle}>
            <div class="card mb-3" style={bootstrapStyle}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={Producto.image} class="img-fluid rounded-start" alt="Producto"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{Producto.title}</h5>
                            <p class="card-text">{Producto.description}</p>
                            
                            <StarFill></StarFill>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto;