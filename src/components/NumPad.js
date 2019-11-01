import React from 'react';
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CalcButton from './CalcButton'
import ActionTypes, { digit, operation, OperationTypes } from '../actions'

const NumPad = () => {

    const dispatch = useDispatch();

  return (
    <Container id="NumPad">
        <Row className="d-flex flex-row align-items-stretch">
            <CalcButton title="AC" action={() => dispatch(operation("AC"))} />
            <CalcButton title="<-" action={() => dispatch(operation('<-'))} />
            {/* <CalcButton title="%" action={() => dispatch(operation('%'))} /> */}
            <CalcButton title="/" action={() => dispatch(operation(OperationTypes.DIV))} />
        </Row>
        <Row className="d-flex flex-row align-items-stretch">
            <CalcButton title="7" action={() => dispatch(digit('7'))} />
            <CalcButton title="8" action={() => dispatch(digit('8'))} />
            <CalcButton title="9" action={() => dispatch(digit('9'))} />
            <CalcButton title="X" action={() => dispatch(operation(OperationTypes.MULT))} />
        </Row>
        <Row className="d-flex flex-row align-items-stretch">
            <CalcButton title="4" action={() => dispatch(digit('4'))} />
            <CalcButton title="5" action={() => dispatch(digit('5'))} />
            <CalcButton title="6" action={() => dispatch(digit('6'))} />
            <CalcButton title="-" action={() => dispatch(operation(OperationTypes.SUB))} />
        </Row>
        <Row className="d-flex flex-row align-items-stretch">
            <CalcButton title="1" action={() => dispatch(digit('1'))} />
            <CalcButton title="2" action={() => dispatch(digit('2'))} />
            <CalcButton title="3" action={() => dispatch(digit('3'))} />
            <CalcButton title="+" action={() => dispatch(operation(OperationTypes.SUM))} />
        </Row>
        <Row className="d-flex flex-row align-items-stretch">
            {/* <CalcButton title="Log"  /> */}
            <CalcButton title="0" action={() => dispatch(digit('0'))} />
            <CalcButton title="." action={() => dispatch(digit('.'))} />
            <CalcButton title="=" action={() => dispatch(operation('='))} />
        </Row>
    </Container>
  )
}

export default NumPad;