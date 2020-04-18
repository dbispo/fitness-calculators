import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/pace/App";


const IndexPage = () => (
  <Layout>
    <SEO title="Pace Calculator" />
    <App />
  </Layout>
)

export default IndexPage
