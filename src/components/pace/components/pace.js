import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { changePace } from "../actions/actions";

class ConnectedPace extends Component {

    constructor(props) {
        super(props)
        this.state = {
            unit: 'km'
        }
    }

    render() {

        const getPace = () => {
            if (!this.props.pace || this.state.unit === 'km') {
                return this.props.pace;
            }
            else {
                return this.props.pace * 1.60934
            }
        }

        const getHour = () => {
            const pace = getPace();
            if (pace) {
                return parseInt(pace / 3600)
            }
            else {
                return ''
            }
        }

        const getMin = () => {
            const pace = getPace();
            if (pace) {
                return parseInt((pace - getHour() * 3600) / 60)
            }
            else {
                return ''
            }
        }

        const getSec = () => {
            const pace = getPace();
            if (pace) {
                return parseInt(pace - (getHour() * 3600) - (getMin() * 60))
            }
            else {
                return ''
            }
        }

        const changeUnit = (event) => {
            const newUnit = event.target.value;
            if (this.props.pace) {
                let newPace = undefined
                if (newUnit === 'km') {
                    newPace = this.props.pace * 1.60934
                }
                else {
                    newPace = this.props.pace / 1.60934
                }
                this.props.changePace(newPace)
            }
            this.setState({
                ...this.state,
                unit: newUnit
            })
        }

        const changeHour = event => {
            let newHour = event.target.value;
            let newPace = undefined
            if (!newHour) newHour = 0
            else newHour = parseInt(newHour)
            if (getPace()) {
                const delta = (newHour - getHour()) * 3600
                newPace = this.props.pace + delta
            }
            else {
                newPace = newHour * 3600
            }

            if (this.state.unit === 'mi') {
                newPace = newPace / 1.60934
            }
            this.props.changePace(newPace)
        }

        const changeMin = event => {
            let newMin = event.target.value;
            if (!newMin) newMin = 0
            else newMin = parseInt(newMin)
            if (this.props.pace) {
                const delta = (newMin - this.props.min) * 60
                const newPace = this.props.pace + delta
                this.props.changePace(newPace)
            }
            else {
                this.props.changePace(newMin * 60)
            }
        }

        const changeSec = event => {
            let newSec = event.target.value;
            if (!newSec) newSec = 0
            else newSec = parseInt(newSec)
            if (this.props.pace) {
                const delta = newSec - this.props.sec
                const newPace = this.props.pace + delta
                this.props.changePace(newPace)
            }
            else {
                this.props.changePace(newSec)
            }
        }

        return (
            <Row className="mb-3">
                <Col>
                    <Row>
                        <Col>Pace:</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="number" value={getHour()} onChange={changeHour} placeholder="Hours" />
                        </Col>
                        <Col>
                            <Form.Control type="number" value={getMin()} onChange={changeMin} placeholder="Minutes" />
                        </Col>
                        <Col>
                            <Form.Control type="number" value={getSec()} onChange={changeSec} placeholder="Seconds" />
                        </Col>
                        <Col md="auto">
                            <Form.Control as="select" onChange={changeUnit}>
                                <option value="km">by km</option>
                                <option value="mi">by mi</option>
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
        pace: state.pace
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePace: (newPace) => dispatch(changePace(newPace))
    }
}

const Pace = connect(mapStateToProps, mapDispatchToProps)(ConnectedPace)

export default Pace;