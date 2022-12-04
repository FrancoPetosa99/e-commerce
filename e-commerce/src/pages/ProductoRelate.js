import React from "react";
import { useParams } from "react-router-dom";
import {useHome} from "../components/Context/Producto.context";
import Layout from "../components/Layout";
import ProductoCard from "../components/ProductoCard";

function ProductoRelate() {

    const {Productos} = useHome();

    const category = useParams().category;

    const ContainerStyle = {
        height:'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '1rem 0px 0px 0px',
        position: 'relative'
    }
    
    const ProductosRelatedContainer = {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: '10px',
    }

    const SuggestionsContainer = {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: '10px',
    }

    return(
        <Layout>
            <div style={ContainerStyle}>
               
                <div style={SuggestionsContainer}>
                    <h4>Productos relacionados</h4>
                    <div style={ProductosRelatedContainer}>
                        {Productos.filter(Producto => Producto.category === category).map(Producto => <ProductoCard Producto={Producto}/>)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductoRelate;