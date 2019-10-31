import React from 'react';
import { useSelector } from 'react-redux'
import selectResult from '../selectors'

const Display = () => {

  const value = useSelector(selectResult);
  
  return (
        <div id="result">
            {value}
        </div>
  )
}

export default Display;
