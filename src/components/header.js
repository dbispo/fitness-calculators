import { Navbar, Nav } from "react-bootstrap";
import React from "react"


const Header = () => (
  <header>
    <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
      <Navbar.Brand href="#home">Fitness Calculators</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Body Mass Index</Nav.Link>
          <Nav.Link href="#pricing">Pace Calculator</Nav.Link>          
        </Nav>        
      </Navbar.Collapse>
    </Navbar>
  </header>
)


export default Header
