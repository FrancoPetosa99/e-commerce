import React from "react";
import ProductoCard from "../components/ProductoCard";
import Layout from "../components/Layout";
import {useHome} from "../components/Context/Producto.context";
import Carrusel from "../components/Carrusel";

function Home() {

    const {Productos} = useHome();
    
    const HomeStyle = {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px'
    }

    const containerProductosStyle = {
        height: 'auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px,1fr))',
        justifyItems: 'center',
        gap: '20px'
    }

    return (
        <Layout>
            <div style={HomeStyle}>
                <Carrusel />
                <div style={containerProductosStyle}>
                    {Productos.map(Producto => <ProductoCard Producto={Producto}></ProductoCard>)}
                </div>
            </div>
        </Layout>
    );
}

export default Home;