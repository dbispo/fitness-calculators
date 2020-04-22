import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { changeTime } from "../actions/actions";
import { useIntl } from "gatsby-plugin-intl";

const ConnectedTime = ({hour, min, sec, time, changeTime}) => {

    const intl = useIntl()
    const changeHour = event => {
        let newHour = event.target.value;
        if (!newHour) newHour = 0
        else newHour = parseInt(newHour)
        if (time) {
            const delta = (newHour - hour) * 3600
            const newTime = time + delta
            changeTime(newTime)
        }
        else {
            changeTime(newHour * 3600)
        }
    }

    const changeMin = event => {
        let newMin = event.target.value;
        if (!newMin) newMin = 0
        else newMin = parseInt(newMin)
        if (time) {
            const delta = (newMin - min) * 60
            const newTime = time + delta
            changeTime(newTime)
        }
        else {
            changeTime(newMin * 60)
        }
    }

    const changeSec = event => {
        let newSec = event.target.value;
        if (!newSec) newSec = 0
        else newSec = parseInt(newSec)
        if (time) {
            const delta = newSec - sec
            const newTime = time + delta
            changeTime(newTime)
        }
        else {
            changeTime(newSec)
        }
    }

    return (
        <Row className="mb-3">
            <Col>
                <Row>
                    <Col>{intl.formatMessage({id: "time"})}:</Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="number" value={hour} onChange={changeHour} placeholder={intl.formatMessage({id: "hours"})} />
                    </Col>

                    <Col>
                        <Form.Control type="number" value={min} onChange={changeMin} placeholder={intl.formatMessage({id: "minutes"})} />
                    </Col>
                    <Col>
                        <Form.Control type="number" value={sec} onChange={changeSec} placeholder={intl.formatMessage({id: "seconds"})} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const mapTimeStateToProps = state => {
    const hour = state.time ? parseInt(state.time / 3600) : '';
    const min = state.time ? parseInt((state.time - (hour * 3600)) / 60) : '';
    const sec = state.time ? state.time - hour * 3600 - min * 60 : '';

    return {
        hour: hour,
        min: min,
        sec: sec,
        time: state.time
    }
}

const mapDispatchToStore = dispatch => {
    return {
        changeTime: newTime => dispatch(changeTime(newTime))
    }
}

const Time = connect(mapTimeStateToProps, mapDispatchToStore)(ConnectedTime)

export default Time;