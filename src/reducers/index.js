import { combineReducers } from 'redux'
import ActionTypes, { OperationTypes } from '../actions'

const initialValues = { 
  buffer: "", 
  oprn: '+',
  log: [],
  result: 0
}

const data = (state = initialValues, action) => {
  const calc = arr => eval(arr.join('')) || 0
  switch(action.type){

    case ActionTypes.DIGIT: 
      return {...state, 
        buffer: state.buffer + "" + action.value 
      };


    case ActionTypes.OPERATION: 
      switch (action.value){

        case OperationTypes.RESULT:
          return {...state, 
            result: parseFloat(state.result) + parseFloat(state.buffer),
            log: state.log.concat(state.buffer),
            buffer: "",
          };

        case OperationTypes.SUM:
          return {...state,
            result: parseFloat(state.result) + parseFloat(state.buffer),
            buffer: "",
            log: state.log.concat([state.buffer, action.value]),
          }

        default:
          return state;
      }

    default: 
      return state;
  }
}

export default combineReducers({
  data
})
