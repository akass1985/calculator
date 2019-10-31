import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import selectResult, { selectBuffer } from '../selectors'

const Display = () => {

  const result = useSelector(selectResult);
  const buffer = useSelector(selectBuffer);
  const output = buffer ? buffer : result;
  
  return (
      <Container 
        style={{ 
          "text-align": "center",
          // "backgroun-color": "red",
          "border": "1px solid grey"
          }} 
        id="display">
          {output}
      </Container>
  )
}

export default Display;
