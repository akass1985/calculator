import React from 'react';
// import VisibleDisplay from '../containers/VisibleDisplay'
import NumPad from './NumPad'
import Display from './Display'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Log from './Log';

const App = () => {
  return (
        <Container id="app">
            <Row>
                <Col>
                    <Log />
                </Col>
            </Row>
            <Row>
                <Col>
	            <Display />
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
