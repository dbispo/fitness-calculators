import React, { Component } from 'react'
import Time from "./time";
import Distance from './distance';
import Pace from './pace';
import { Row, Button, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changePace, changeTime, changeDistance, clearForm } from '../actions/actions';
import { injectIntl } from 'gatsby-plugin-intl';


class ConnectedButtons extends Component {

    constructor(props) {
        super(props)
        this.intl = props.intl
    }
    render() {
        const calc = () => {
            let willCalc = 'none';
            if (!this.props.distance && this.props.pace && this.props.time) willCalc = 'distance'
            else if (!this.props.time && this.props.pace && this.props.distance) willCalc = 'time'
            else if (this.props.distance && this.props.time) willCalc = 'pace'

            if (willCalc === 'pace') {
                const newPace = this.props.time / this.props.distance
                this.props.changePace(newPace)
            }
            else if (willCalc === 'time') {
                const newTime = this.props.distance * this.props.pace
                this.props.changeTime(newTime)
            }
            else if (willCalc === 'distance') {
                const newDistance = this.props.time / this.props.pace
                this.props.changeDistance(newDistance)
            }
        }

        const isCalcEnabled = () => {
            return (this.props.distance && this.props.time) ||
                (this.props.distance && this.props.pace) ||
                (this.props.time && this.props.pace)
        }

        return (
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button type="submit" onClick={calc} disabled={!isCalcEnabled()}>{this.intl.formatMessage({ id: 'calculate' })}</Button>
                    <Button variant="secondary" onClick={this.props.clearForm}>{this.intl.formatMessage({ id: 'clear' })}</Button>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        time: state.time,
        distance: state.distance,
        pace: state.pace
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePace: (newPace) => dispatch(changePace(newPace)),
        changeTime: (newTime) => dispatch(changeTime(newTime)),
        changeDistance: (newDistance) => dispatch(changeDistance(newDistance)),
        clearForm: () => dispatch(clearForm())
    }
}

const Buttons = connect(mapStateToProps, mapDispatchToProps)(injectIntl(ConnectedButtons))

const handleSubmit = (event)=> {
    event.preventDefault()
    return false;
}
const PaceForm = () => (
    <Container>
        <form onSubmit={handleSubmit}>
            <Time />
            <Distance />
            <Pace />
            <Buttons />
        </form>
    </Container>
)

export default PaceForm;