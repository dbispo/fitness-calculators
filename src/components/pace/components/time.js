import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { changeTime } from "../actions/actions";

class ConnectedTime extends Component {

    render() {
        const changeHour = event => {
            let newHour = event.target.value;
            if(!newHour) newHour = 0
            else newHour = parseInt(newHour)
            if(this.props.time) {
                const delta = (newHour - this.props.hour) * 3600
                const newTime = this.props.time + delta
                this.props.changeTime(newTime)
            }
            else {
                this.props.changeTime(newHour*3600)
            }
        }

        const changeMin = event => {
            let newMin = event.target.value;
            if(!newMin) newMin = 0
            else newMin = parseInt(newMin)
            if(this.props.time) {
                const delta = (newMin - this.props.min) * 60
                const newTime = this.props.time + delta
                this.props.changeTime(newTime)
            }
            else {
                this.props.changeTime(newMin*60)
            }
        }

        const changeSec = event => {
            let newSec = event.target.value;
            if(!newSec) newSec = 0
            else newSec = parseInt(newSec)
            if(this.props.time) {
                const delta = newSec - this.props.sec
                const newTime = this.props.time + delta
                this.props.changeTime(newTime)
            }
            else {
                this.props.changeTime(newSec)
            }
        }

        return (
            <Row className="mb-3">
                <Col md="2" className="my-auto text-right">Time:</Col>
                <Col>
                    <Form.Control type="number" value={this.props.hour} onChange={changeHour} placeholder="Hours" />
                </Col>
                <Col>
                    <Form.Control type="number" value={this.props.min} onChange={changeMin} placeholder="Minutes" />
                </Col>
                <Col>
                    <Form.Control type="number" value={this.props.sec} onChange={changeSec} placeholder="Seconds" />
                </Col>
            </Row>
        )
    }
}

const mapTimeStateToProps = state => {
    const hour = state.time ? parseInt(state.time / 3600) : '';
    const min = state.time ? parseInt((state.time - (hour * 3600)) / 60) : '';
    const sec = state.time ? state.time - hour*3600 - min*60 : '';

    return {
        hour: hour,
        min: min,
        sec: sec,
        time: state.time
    }
}

const mapDispatchToStore = dispatch => {
    return {
        changeTime : newTime => dispatch(changeTime(newTime))
    }
}

const Time = connect(mapTimeStateToProps, mapDispatchToStore)(ConnectedTime)

export default Time;