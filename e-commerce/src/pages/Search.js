import React from "react";
import Layout from "../components/Layout";
import FilteredByCategory from "../components/FilteredByCategory";
import {useHome} from "../components/Context/Producto.context";
import ProductoCardDetail from "../components/ProductoCardDetail";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

function Search() {

    const {FilteredProducts, Categories, IsFetchingData} = useHome();

    const filter = useParams().filter;
    
    const ContainerStyle = {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
    }

    const ContainerCategoriesStyle = {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
    }

    const labelStyle = {
        height: 'auto',
        width: '100%',
        textAlign: 'left',
        margin: '1rem'
    }

    const ContainerLoadingStyle = {
        height: '100%',
        minHeight: '95vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <Layout>
            {
                IsFetchingData
                ? 
                <div style={ContainerLoadingStyle}>
                    <Loading />
                </div>
                :
                <>
                    <h5 style={labelStyle}>Resultados encontrados para <u>{filter}</u>: {FilteredProducts.length}</h5>
                    <div style={ContainerStyle}>
                        {FilteredProducts.map(Producto => <ProductoCardDetail Producto={Producto} />)}
                    </div>
                    <div style={ContainerCategoriesStyle}>
                        {Categories.map(category => <FilteredByCategory Category={category.name} />)}
                    </div>
                </>
            }
        </Layout>
    );
}

export default Search;