import { combineReducers } from 'redux'

import buffer from './buffer'
import result from './result'
import operation from './operation'

export default combineReducers({
  buffer,
  result,
  operation
})
