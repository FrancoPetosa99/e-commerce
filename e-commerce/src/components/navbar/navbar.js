import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#New">New</Nav.Link>
            <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;