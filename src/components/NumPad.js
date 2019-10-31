import React from 'react';
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CalcButton from './CalcButton'
import { op } from '../actions'

const NumPad = () => {

    const dispatch = useDispatch();

  return (
    <Container>
        <Row className="justify-content-center">
            <CalcButton title="AC" action={() => dispatch(op('AC'))} />
            <CalcButton title="<-" action={() => dispatch(op('<-'))} />
            <CalcButton title="%" action={() => dispatch(op('%'))} />
            <CalcButton title="/" action={() => dispatch(op('/'))} />
        </Row>
        <Row className="justify-content-center">
            <CalcButton title="7" action={() => dispatch(op('7'))} />
            <CalcButton title="8" action={() => dispatch(op('8'))} />
            <CalcButton title="9" action={() => dispatch(op('9'))} />
            <CalcButton title="X" action={() => dispatch(op('*'))} />
        </Row>
        <Row className="justify-content-center">
            <CalcButton title="4" action={() => dispatch(op('4'))} />
            <CalcButton title="5" action={() => dispatch(op('5'))} />
            <CalcButton title="6" action={() => dispatch(op('6'))} />
            <CalcButton title="-" action={() => dispatch(op('-'))} />
        </Row>
        <Row className="justify-content-center">
            <CalcButton title="1" action={() => dispatch(op('1'))} />
            <CalcButton title="2" action={() => dispatch(op('2'))} />
            <CalcButton title="3" action={() => dispatch(op('3'))} />
            <CalcButton title="+" action={() => dispatch(op('+'))} />
        </Row>
        <Row className="justify-content-center">
            <CalcButton title="Log"  />
            <CalcButton title="0" action={() => dispatch(op('0'))} />
            <CalcButton title="." action={() => dispatch(op('.'))} />
            <CalcButton title="=" action={() => dispatch(op('='))} />
        </Row>
    </Container>
  )
}

export default NumPad;