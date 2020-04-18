import React, { Component } from 'react'
import Time from "./time";
import Distance from './distance';
import Pace from './pace';
import { Row, Button, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changePace, changeTime, changeDistance, clearForm } from '../actions/actions';


class ConnectedButtons extends Component {

    render() {
        const calc = () => {
            let willCalc = 'none';
            if(!this.props.distance && this.props.pace && this.props.time) willCalc = 'distance'
            else if(!this.props.time && this.props.pace && this.props.distance) willCalc = 'time'
            else if(this.props.distance && this.props.time) willCalc = 'pace'

            if(willCalc === 'pace') {
                const newPace = this.props.time / this.props.distance
                this.props.changePace(newPace)
            }
            else if(willCalc === 'time') {
                const newTime = this.props.distance * this.props.pace
                this.props.changeTime(newTime)
            }
            else if(willCalc === 'distance') {
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
                    <Button onClick={calc} disabled={!isCalcEnabled()}>Calculate</Button>
                    <Button variant="secondary" onClick={this.props.clearForm}>Clear</Button>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        time : state.time,
        distance : state.distance,
        pace : state.pace
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePace : (newPace) => dispatch(changePace(newPace)),
        changeTime : (newTime) => dispatch(changeTime(newTime)),
        changeDistance : (newDistance) => dispatch(changeDistance(newDistance)),
        clearForm : () => dispatch(clearForm())
    }
}

const Buttons = connect(mapStateToProps, mapDispatchToProps)(ConnectedButtons)

const PaceForm = () => (
    <Container>
        <Time />
        <Distance />
        <Pace />
        <Buttons />
    </Container>
)

export default PaceForm;