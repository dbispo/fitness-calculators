import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { changeDistance } from "../actions/actions";
import { injectIntl } from "gatsby-plugin-intl";

class ConnectedDistance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: 'km',
            distance: props.distance,
            inputDistance: undefined
        }
        this.intl = props.intl
    }
    render() {

        const changeUnit = (event) => {
            const newUnit = event.target.value

            changeDistance(this.state.distance, newUnit)
        }

        const getInputDistance = () => {
            let inputDistance = ''
            if (this.props.distance && this.state.unit === 'km') {
                inputDistance = this.props.distance
            }
            else if (this.props.distance) {
                inputDistance = this.props.distance * 0.621371
            }
            return inputDistance;
        }

        const changeDistanceEvent = (event) => {
            let newDistance = event.target.value;
            changeDistance(newDistance, this.state.unit)
        }

        const changeDistance = (newDistance, unit) => {
            if (newDistance) {
                newDistance = parseFloat(newDistance)
                if (unit === this.state.unit) {
                    if (unit === 'mi') {
                        newDistance = newDistance * 1.60934
                    }
                }
                else {
                    if (unit === 'mi') {
                        newDistance = newDistance * 1.60934
                    }
                    else {
                        newDistance = newDistance / 1.60934
                    }
                }
            }
            this.setState({
                ...this.state,
                distance: newDistance,
                unit: unit
            })
            this.props.changeDistance(newDistance)
        }

        return (
            <Row className="mb-3">
                <Col>
                    <Row>
                        <Col>{this.intl.formatMessage({id : 'distance'})}:</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control value={getInputDistance()} onChange={changeDistanceEvent} placeholder={this.intl.formatMessage({id : 'distance'})} />
                        </Col>
                        <Col xs="auto">
                            <Form.Control as="select" value={this.state.unit} onChange={changeUnit}>
                                <option>km</option>
                                <option>mi</option>
                            </Form.Control>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        distance: state.distance
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeDistance: (newDistance) => dispatch(changeDistance(newDistance))
    }
}

const Distance = connect(mapStateToProps, mapDispatchToProps)(injectIntl(ConnectedDistance))

export default Distance;