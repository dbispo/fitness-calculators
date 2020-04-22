import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeHeight } from './actions';
import { injectIntl } from 'gatsby-plugin-intl';

class ConnectedHeight extends Component {
    constructor(props, { intl }) {
        super(props)
        this.state = {
            unit: 'm',
            height: ''
        }
        this.intl = props.intl
        this.changeUnit = this.changeUnit.bind(this)
        this.changeHeightEvent = this.changeHeightEvent.bind(this)
        this.getHeight = this.getHeight.bind(this)
    }



    changeUnit(event) {
        const newUnit = event.target.value;
        this.changeHeight(this.state.height, newUnit)
    }

    changeHeightEvent(event) {
        const newHeight = event.target.value;
        this.changeHeight(newHeight, this.state.unit)
    }

    changeHeight(stateHeight, unit) {
        let storeHeight = stateHeight

        if (storeHeight && unit === 'ft') {
            storeHeight = storeHeight / 3.2808
        }

        this.props.changeHeight(storeHeight)

        this.setState({
            ...this.state,
            unit: unit,
            height: stateHeight
        })
    }

    getHeight() {
        let height = this.props.height;
        if (height && this.state.unit === 'ft') {
            height = height * 3.2808
        }

        return height
    }

    render() {
        return (
            <>
                <Row>
                    <Col>{this.intl.formatMessage({ id: "height" })}:</Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="number" onChange={this.changeHeightEvent} value={this.getHeight()} /></Col>
                    <Col md="auto">
                        <Form.Control as="select" value={this.state.unit} onChange={this.changeUnit}>
                            <option value='m'>m</option>
                            <option value='ft'>ft</option>
                        </Form.Control>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeHeight: (newHeight) => dispatch(changeHeight(newHeight))
    }
}

const mapStateToProps = state => {
    return {
        height: state.height
    }
}

const Height = connect(mapStateToProps, mapDispatchToProps)(injectIntl(ConnectedHeight))

export default Height;