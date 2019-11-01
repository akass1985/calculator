import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import selectResult, { selectBuffer } from '../selectors'

const Display = () => {

  const result = useSelector(selectResult);
  const buffer = useSelector(selectBuffer);
  const output = buffer ? buffer : result;

  const getColor = val => {
    var color = "white";
    if (val < 0) color = "red";
    if (val > 0) color =  "green";
    if (val == 0) color = "white";
    if ((val - Math.floor(val)) != 0) color = "yellow";
    return color;
  }
  
  return (
      <Container id="display">
          <Row>
            <Col>
            <input id="displayContent"
              style={{ backgroundColor: getColor(output) }} 
              value={output} />
            </Col>
          </Row>
      </Container>
  )
}

export default Display;
