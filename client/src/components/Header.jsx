import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const header = () => {
    return (
        <div>
            <Navbar bg="primary" className="mb-3" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Registration and Login Practice</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Login</Nav.Link>
      <Nav.Link href="#home">Register</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default header;
