import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Form, Button } from "react-bootstrap"


const IndexPage = () => (
    <Layout>
        <SEO title="Body Mass Index" />
        <h1>Body Mass Index</h1>
        <Container>
            <Row className="mb-3">
                <Col md="2" className="my-auto text-right">Height:</Col>
                <Col><Form.Control type="number" /></Col>
                <Col md="auto">
                    <Form.Control as="select">
                        <option>meters</option>
                        <option>feet</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="2" className="my-auto text-right">Weight:</Col>
                <Col><Form.Control type="number" /></Col>
                <Col md="auto">
                    <Form.Control as="select">
                        <option>kg</option>
                        <option>pounds</option>
                    </Form.Control>
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
