import React from "react";
import ProductoCard from "../components/ProductoCard";

function Home(props) {

    const {Productos, CantidadEnCarrito, SetCantidadEnCarrito, InCarrito, SetCarrito} = props;

    const HomeStyle = {
        height: 'auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px,1fr))',
        justifyItems: 'center',
        gap: '20px'
    }

    return (
        <div style={HomeStyle}>
            {Productos.map(Producto => <ProductoCard CantidadEnCarrito={CantidadEnCarrito} SetCantidadEnCarrito={SetCantidadEnCarrito} InCarrito={InCarrito} SetCarrito={SetCarrito} Producto={Producto}></ProductoCard>)}
        </div>
    );
}

export default Home;