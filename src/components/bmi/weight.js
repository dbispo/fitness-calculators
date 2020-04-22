import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import { changeWeight } from './actions';
import { connect } from 'react-redux';
import { injectIntl } from 'gatsby-plugin-intl';

class ConnectedWeight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit : 'kg',
            weight : ''
        }
        this.intl = props.intl
        this.changeUnit = this.changeUnit.bind(this)
        this.changeWeight =this.changeWeight.bind(this)
        this.getWeight = this.getWeight.bind(this)
        this.changeWeightEvent = this.changeWeightEvent.bind(this)
    }

    changeUnit(event) {
        const newUnit = event.target.value;
        this.changeWeight(this.state.weight, newUnit)
    }

    changeWeightEvent(event) {
        const newWeight = event.target.value;        
        this.changeWeight(newWeight, this.state.unit)
    }

    changeWeight(stateWeight, newUnit) {
        let storeWeight = stateWeight
        if(stateWeight && newUnit === 'lbs') {
            storeWeight = stateWeight / 2.2046
        }
        this.props.changeWeight(storeWeight)
        
        this.setState({
            ...this.state,
            unit : newUnit,
            weight : stateWeight
        })
    }

    getWeight() {
        let weight = ''
        if(this.state.unit === 'lbs') {
            weight = this.props.weight * 2.2046
        }
        else {
            weight = this.props.weight            
        }

        if(weight === 0) {
            weight = ''
        }

        return weight
    }

    render() {
        return (
            <>
                <Row>
                    <Col>{this.intl.formatMessage({id : 'weight'})}:</Col>
                </Row>
                <Row>
                    <Col><Form.Control type="number" onChange={this.changeWeightEvent} value={this.getWeight()} /></Col>
                    <Col md="auto">
                        <Form.Control as="select" value={this.state.unit} onChange={this.changeUnit}>
                            <option value='kg'>kg</option>
                            <option value='lbs'>lbs</option>
                        </Form.Control>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeWeight : (newWeight) => dispatch(changeWeight(newWeight)) 
    }
}

const mapStateToProps = state => {
    return {
        weight : state.weight
    }
}

const Weight = connect(mapStateToProps, mapDispatchToProps)(injectIntl(ConnectedWeight))


export default Weight;