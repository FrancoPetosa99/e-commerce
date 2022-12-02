import React from "react";
import ProductoCard from "../components/ProductoCard";
import Layout from "../components/Layout";
import {useHome} from "../components/Context/Producto.context";

function Home() {

    const {Productos} = useHome();
    
    const HomeStyle = {
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
                {Productos.map(Producto => <ProductoCard Producto={Producto}></ProductoCard>)}
            </div>
        </Layout>
    );
}

export default Home;