import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom';

function navbar(props) {

  const {ShowCart, SetShowCart, CantidadEnCarrito} = props;
  const openCarrito =()=> {
    SetShowCart(!ShowCart);
    console.log(ShowCart)
  }

  const NavbarStyle = {
    width: '100%'
  }

  return (
    <Navbar style={NavbarStyle} bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
            <Nav.Link href="#New">New</Nav.Link>
            <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link href="#" onClick={openCarrito}>Carrito {CantidadEnCarrito > 0 && <Badge  pill bg="primary">{CantidadEnCarrito}</Badge>}</Nav.Link>
            <Nav.Link><Link to={'/Contacto'}>Contacto</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;