import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import Height from "../components/bmi/height"
import Weight from "../components/bmi/weight"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
    <Layout>
        <SEO title="Body Mass Index" />
        <h1>Body Mass Index</h1>
        <Container>
            <Row className="mb-3">
                <Col>
                    <Height />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Weight />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button>Calculate</Button>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default IndexPage
