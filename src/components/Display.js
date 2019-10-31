import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import selectResult, { selectBuffer } from '../selectors'

const Display = () => {

  const result = useSelector(selectResult);
  const buffer = useSelector(selectBuffer);
  
  return (
      <div id="result">
          {buffer ? buffer : result}
      </div>
  )
}

export default Display;
