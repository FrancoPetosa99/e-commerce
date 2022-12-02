import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useHome} from "../components/Context/Producto.context";
import Layout from "../components/Layout";
import ProductoCard from "../components/ProductoCard";
import ProductoCardDetail from "../components/ProductoCardDetail";

function Producto() {

    const {Productos} = useHome();

    const [id, SetId] = useState(useParams().id);

    const [Producto, SetProducto] = useState(Productos.find(Producto => {
        return Producto.id === id
    }))

    const [Category, SetCategory] = useState(Producto.category);

    const [SuggestedProductos, SetSuggestedProductos] = useState(Productos.filter(Producto => {
        return Producto.category === Category && Producto.id !== id;
    }))

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
                <ProductoCardDetail Producto={Producto} />
                <div style={SuggestionsContainer}>
                    <h4>Productos relacionados</h4>
                    <div style={ProductosSuggestionsContainer}>
                        {SuggestedProductos.map(Producto => <ProductoCard Producto={Producto} />)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Producto;