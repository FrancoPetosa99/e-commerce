import React from "react";
import { useParams } from "react-router-dom";
import {useHome} from "../components/Context/Producto.context";
import Layout from "../components/Layout";
import ProductoCardDetail from "../components/ProductoCardDetail";
import ProductoCardRelate from "../components/ProductoCardRelate";

function ProductoDetail() {

    const {Productos} = useHome();

    const id = useParams().id;

    const Producto = Productos.find(Producto => Producto.id === id);

    const Category = Producto.category;
    
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
    
    const ProductosSuggestionsContainer = {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: '1rem',
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
                <ProductoCardDetail Producto={Producto} />
                <div style={SuggestionsContainer}>
                    <h4>Productos relacionados</h4>
                    <div style={ProductosSuggestionsContainer}>
                        {Productos.filter(Producto => Producto.category === Category && Producto.id !== id).map(Producto => <ProductoCardRelate Producto={Producto} />)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductoDetail;