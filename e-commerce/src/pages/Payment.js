import Table from 'react-bootstrap/Table';
import LineItem from '../components/LineItem';

function Payment(props) {

    const {Productos, Total} = props

    return (
        <Table hover>
          <tbody >
            {Productos.map(Producto => <LineItem Producto={Producto}></LineItem>)}
            <tr>
              <td colSpan={2}>Total:</td>
              <td>${Total}</td>
            </tr>
          </tbody>
      </Table>
    );
}

export default Payment;