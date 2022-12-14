import React from "react";
import {useHome} from "../components/Context/Producto.context";
import ProductoCard from "../components/ProductoCard";

function FilteredByCategory(props) {

    const {Productos} = useHome();

    const {Category} = props;
    
    const ContainerStyle = {
        height:'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '1rem 0 0 0',
        position: 'relative'
    }
    
    const FilteredProductosStyle = {
        height: 'auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px,1fr))',
        justifyItems: 'center',
        gap: '20px'
    }

    const labelStyle = {
        height: 'auto',
        width: '100%',
        textAlign: 'left',
        margin: '1rem',
        backgroundColor: '#0d6efd',
        padding: '0.5rem',
        color: 'white'
    }

    return(
        <div style={ContainerStyle}>
            <h5 style={labelStyle}>{Category}</h5>
            <div style={FilteredProductosStyle}>
                {Productos.filter(Producto => Producto.category === Category).map(Producto => <ProductoCard Producto={Producto} />)}
            </div>
        </div>
    )
}

export default FilteredByCategory;