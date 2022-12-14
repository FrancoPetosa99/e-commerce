import React from "react";
import Table from 'react-bootstrap/Table';
import LineItem from '../components/LineItem';
import Badge from 'react-bootstrap/Badge';
import {useHome} from "../components/Context/Producto.context";
import Layout from "../components/Layout";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Payment() {

    const {InCarrito, ClientData, SetClientData, submitSelling} = useHome();
    
    const FormStyles = {
      maxWidth: '900px',
      padding: '1rem',
    }
  
    const ButtonStyles = {
      width: '100%',
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

    const handleForm = (e) => {
      SetClientData({ ...ClientData, [e.target.name]: e.target.value });
    };
    
    return (
      <Layout>
        <h5 style={labelStyle}>Check-out</h5>
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
        <h5 style={labelStyle}>Información personal</h5>
        <Form style={FormStyles}>
        <Row className="mb-3">
          <Col sm="6" className="mb-3">
            <Form.Group className="mb-3" controlId="ClientName">
              <Form.Control onChange={handleForm} name='ClientName' type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group className="mb-3" controlId="ClientLastName">
              <Form.Control onChange={handleForm} name='ClientLastName' type="text" placeholder="Ingrese su apellido" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Form.Group className="mb-3" controlId="ClientAddress">
              <Form.Control onChange={handleForm} name='ClientAddress' type="text" placeholder="Ingrese su dirección" />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group className="mb-3" controlId="ClientEmail">
              <Form.Control onChange={handleForm} name='ClientEmail' type="email" placeholder="Ingrese su email" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control onChange={handleForm} name='ClientComments' as="textarea" rows={6} placeholder="Agregue algún comentario a su compra" />
        </Form.Group>
        <Row>
          <Col  sm="6">
            <Button style={ButtonStyles} size='mb' className="mb-3" variant="outline-primary" type="button">Cancelar</Button>
          </Col>
          <Col  sm="6">
            <Button onClick={submitSelling} style={ButtonStyles} size='mb' className="mb-3" variant="primary" type="button">Comprar</Button>
          </Col>
        </Row>
      </Form>

      </Layout>
    );
}

export default Payment;