import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap';

class Height extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>Height:</Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="number" /></Col>
                    <Col md="auto">
                        <Form.Control as="select">
                            <option>meters</option>
                            <option>feet</option>
                        </Form.Control>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Height;