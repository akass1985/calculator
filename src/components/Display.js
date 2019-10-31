import React from 'react';
import { useSelector } from 'react-redux'
import selectResult, { selectOperation } from '../selectors'
import selectBuffer from '../selectors';

const Display = () => {

  const buffer = useSelector(selectBuffer);
  const operation = useSelector(selectOperation);
  const result = useSelector(selectResult);
  
  return (
        <div id="result">
            {operation ? buffer : result}
        </div>
  )
}

export default Display;
