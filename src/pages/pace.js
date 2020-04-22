import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../components/pace/App";
import { useIntl } from "gatsby-plugin-intl";


const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({id : 'paceCalculator'})} />
      <App />
    </Layout>
  )
}

export default IndexPage
