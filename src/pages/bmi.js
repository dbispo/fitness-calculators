import React from "react"
import { BMIForm } from "../components/bmi/form"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row } from "react-bootstrap"


const IndexPage = () => (
    <Layout>
        <SEO title="Body Mass Index" />
        <Container>
            <Row className="mb-3">
                <h1>Body Mass Index</h1>
            </Row>
            <Row>
                <BMIForm />
            </Row>
        </Container>
    </Layout>
)

export default IndexPage
