import { injectIntl, Link } from "gatsby-plugin-intl"
import React from "react"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaWeight, FaRunning } from "react-icons/fa";

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron fluid>
      <Container>
        <h1>{intl.formatMessage({ id: 'siteTitle' })}</h1>
        <p className="lead">{intl.formatMessage({ id: 'lead' })}</p>
      </Container>
    </Jumbotron>
    <Container style={{
      margin: `0 auto`,
      maxWidth: 600,
      padding: `0 1.0875rem 1.45rem`,
    }}>
      <Row className="justify-content-center">
        <Col className="d-flex flex-column align-items-center">
          <FaWeight size="2em" />
          <div className="d-flex flex-column align-items-center">
            <Link to="/bmi" style={{textAlign : "center"}}>{intl.formatMessage({ id: 'bodyMassIndex' })}</Link>
            <p style={{ textAlign: 'center' }}>{intl.formatMessage({ id: 'bmi_lead' })}</p>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <FaRunning size="2em" />
          <div className="d-flex flex-column align-items-center">
            <Link to="/pace" style={{textAlign : "center"}}>{intl.formatMessage({ id: 'paceCalculator' })}</Link>
            <p style={{ textAlign: 'center' }}>{intl.formatMessage({ id: 'pace_lead' })}</p>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default injectIntl(IndexPage)
