import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Layout from "../components/Layout";

function Contacto() {

  const handleSubmit = ()=>{
    console.log('btn clicked');
  }

  const FormStyles = {
    maxWidth: '900px',
    padding: '1rem',
  }

  const ButtonStyles = {
    width: '100%',
  }

  return (
    <Layout>
      <Form style={FormStyles}>
        <Row className="mb-3">
          <Col sm="6" className="mb-3">
            <Form.Group className="mb-3" controlId="ClientName">
              <Form.Control type="text" placeholder="Ingrese su nombe" />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group className="mb-3" controlId="ClientLastName">
              <Form.Control type="text" placeholder="Ingrese su apellido" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Form.Group className="mb-3" controlId="ClientAddress">
              <Form.Control type="text" placeholder="Ingrese su dirección" />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group className="mb-3" controlId="ClientEmail">
              <Form.Control type="email" placeholder="Ingrese su email" />
              <Form.Text className="text-muted">No compartiremos su dirrección con nadie más.</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={10} placeholder="Dejenos sus comentarios" />
        </Form.Group>
        <Button onClick={handleSubmit} style={ButtonStyles} size='mb' className="mb-3" variant="primary" type="button">Send</Button>
      </Form>
    </Layout>
  );
}

export default Contacto;