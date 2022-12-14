import React from "react";
import { Form, Button, Navbar, Nav, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { Search } from "react-bootstrap-icons";
import {useHome} from "../Context/Producto.context";

function Navb() {

  const NavbarStyle = {
    width: '100%',
    marginBottom: '1rem'
  }

  const FormStyle = {
    gap: '1rem'
  }

  const {Filter, SetFilter, getFilteredProducts} = useHome();

  const handleFilter =(e)=> {
    SetFilter(e.target.value);
  }

  return (
    <Navbar style={NavbarStyle} bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">Lincomerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
            <Nav.Link href="#New">New</Nav.Link>
            <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link><Link to={'/Contacto'}>Contacto</Link></Nav.Link>
          </Nav>
          <Form style={FormStyle} className="d-flex">
            <Form.Control onChange={(e)=>handleFilter(e)} type="search" placeholder="Buscar..." className="lg-2" aria-label="Search" />
            {
              Filter
              ?<Link to={`/Search/${Filter}`}><Button onClick={getFilteredProducts} variant="outline-primary"><Search fontSize={18}/></Button></Link>
              :<Button variant="outline-primary"><Search fontSize={18}/></Button>
            }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;