import { Navbar, Nav } from "react-bootstrap";
import React from "react"
import { Link } from "gatsby";


const Header = () => (
  <header>
    <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
      <Navbar.Brand><Link to="/">Fitness Calculators</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/bmi" className="nav-link">Body Mass Index</Link>
          <Link to="/pace" className="nav-link">Pace Calculator</Link>
        </Nav>        
      </Navbar.Collapse>
    </Navbar>
  </header>
)


export default Header
