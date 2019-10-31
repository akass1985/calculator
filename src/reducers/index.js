import { combineReducers } from 'redux'
import ActionTypes, { OperationTypes } from '../actions'

const initialValues = { 
  buffer: "", 
  oprn: '+',
  log: [],
  result: 0
}

const calc = (operand1, operation, operand2) => {
  switch (operation){
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    case '/': return (operand2 == 0) ? 'Infinity' : (operand1 / operand2);
    default: return 'NaN';
  }
}

const data = (state = initialValues, action) => {
  
  switch(action.type){

    case ActionTypes.DIGIT: 
      return {...state, 
        buffer: state.buffer + "" + action.value 
      };


    case ActionTypes.OPERATION: 
      switch (action.value){

        case OperationTypes.DEL_LAST:
          return {...state,
            buffer: state.buffer.slice(0, state.buffer.length-1)}

        case OperationTypes.AC:
          return {...state,
          result: 0,
          log: [],
          buffer: ""
        };

        case OperationTypes.RESULT:
          return {...state, 
            result: parseFloat(state.result) + parseFloat(state.buffer),
            log: state.log.concat(state.buffer),
            buffer: "",
          };

        case OperationTypes.SUM:
        case OperationTypes.SUB:
        case OperationTypes.MULT:
        case OperationTypes.DIV:
          return {...state,
            result: calc(parseFloat(state.result), action.value, parseFloat(state.buffer)),
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
