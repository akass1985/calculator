import React from 'react';
import Display from './Display'
import NumPad from '../containers/NumPad'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () => {
  return (
        <Container>
            <Row>
                <Col>
                    <Display value="0"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <NumPad />
                </Col>
            </Row>
        </Container>
    
  )
}

export default App
