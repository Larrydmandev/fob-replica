import React from 'react'
import {Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

function Mainnav() {
  return (
      <section className="nav-sec  bg-nav sticky-top">
           <Navbar expand="lg" className="" style={{color: 'white'}}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="./images/small-fob-logo.png"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{paddingLeft: '20%'}}>
                            <Nav.Link href="#home" id='nav-link'>Home</Nav.Link>
                            <Nav.Link href="#link" id='nav-link'>Service Plan</Nav.Link>
                            <Nav.Link href="#link" id='nav-link'>Coverage</Nav.Link>
                            <Nav.Link href="#link" id='nav-link'>Help</Nav.Link>
                            <Nav.Link href="#link" id='nav-link'>Sign Up</Nav.Link>
                            <Nav.Link href="#link" id='nav-link'>News</Nav.Link>
                            <Nav.Link href="#link" id='nav-link'>Blog</Nav.Link>
                            <Nav.Link href="#link" id='nav-link'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </section>
    )
}

export default Mainnav