import React from 'react';
import { connect } from 'react-redux'

const Display = ({value}) => {
  return (
        <div id="result">
            {value}
        </div>
  )
}

export default connect()(Display)
