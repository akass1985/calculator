import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import selectResult, { selectBuffer } from '../selectors'

const Display = () => {

  const result = useSelector(selectResult);
  const buffer = useSelector(selectBuffer);
  const output = buffer ? buffer : result;
  
  return (
      <div style={{ "backgroun-color": "red"}} id="result">
          {output}
      </div>
  )
}

export default Display;
