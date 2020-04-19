import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Height from './height';
import { Buttons, Result } from './result';
import store from './store';
import Weight from './weight';

export const BMIForm = () => {
    return (
        <Provider store={store}>
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
                    <Result />
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Buttons />
                    </Col>
                </Row>
            </Container>
        </Provider>
    )
} 