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
      <div>
        <main>{children}</main>
      </div>      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
