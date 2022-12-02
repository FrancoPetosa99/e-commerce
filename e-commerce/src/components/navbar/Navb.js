import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Navb() {

  const NavbarStyle = {
    width: '100%'
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;