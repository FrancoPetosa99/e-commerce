import Table from 'react-bootstrap/Table';
import LineItem from '../components/LineItem';
import Badge from 'react-bootstrap/Badge';
import {useHome} from "../components/Context/Producto.context";
import Layout from "../components/Layout";

function Payment(props) {

    //const {Productos, Total} = props;
    const {InCarrito} = useHome();
    
    return (
      <Layout>
        <Table hover>
          <tbody >
            {InCarrito.map(Producto => <LineItem Producto={Producto}></LineItem>)}
            <tr>
              <td colSpan={3}><h6>Total:</h6></td>
              <td>
                <Badge>
                  <h6>
                    ${Math.round(InCarrito.reduce((prevTotal,Producto) => {
                      return prevTotal + Producto.price * Producto.cantidad
                    }, 0))}
                  </h6>
                </Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </Layout>
    );
}

export default Payment;