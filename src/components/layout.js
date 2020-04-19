/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import "./layout.css";


const Layout = ({ children }) => {

  return (
    <div style={{minHeight : '100vh'}}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 600,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{ bottom: '0', position : 'absolute', backgroundColor : 'lightgrey', height : '3em', width : '100%' }}>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
