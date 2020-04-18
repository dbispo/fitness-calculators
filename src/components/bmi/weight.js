import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap';

class Weight extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>Weight:</Col>
                </Row>
                <Row>
                    <Col><Form.Control type="number" /></Col>
                    <Col md="auto">
                        <Form.Control as="select">
                            <option>kg</option>
                            <option>pounds</option>
                        </Form.Control>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Weight;