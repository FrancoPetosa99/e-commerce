import React from "react"
import Navb from "./navbar/Navb";
import Carrito from "./Carrito";
import Loading from './Loading';
import CarritoBtnFloat from "./CarritoBtnFloat";
import { useHome } from '../components/Context/Producto.context';

function Layout(props) {

    const {ProductosAreReady} = useHome()

    const ContainerStyle = {
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column'
        //border: 'solid 1px black'
    }

    const ContainerLoadingStyle = {
        height: 'auto',
        minHeight: '95vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        //border: 'solid 1px black'
    }

    return(

        <div style={ContainerStyle}>
            <Navb/>
            <Carrito/>
            <CarritoBtnFloat />
                {
                    ProductosAreReady 
                    ?<>{props.children}</>
                    :<div style={ContainerLoadingStyle}><Loading/></div>
                }
        </div>
    )
    
}
export default Layout;