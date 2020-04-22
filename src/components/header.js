import { Navbar, Nav } from "react-bootstrap";
import React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import LanguageSelector from "./language-selector";

const Header = () => {
  const intl = useIntl()
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
        <Navbar.Brand><Link to="/">{intl.formatMessage({ id: 'siteTitle' })}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/bmi" className="nav-link">{intl.formatMessage({ id: "bodyMassIndex" })}</Link>
            <Link to="/pace" className="nav-link">{intl.formatMessage({ id: "paceCalculator" })}</Link>
          </Nav>
          <Nav>
            <LanguageSelector />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}


export default Header
