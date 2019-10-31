import ActionTypes, { OperationTypes } from '../actions'

const buffer = (state = "0+", action) => {
    switch(action.type){
        case ActionTypes.DIGIT: 
            return state + "" + action.value;
        case ActionTypes.OPERATION:
            switch (action.value){
                case OperationTypes.SUM:
                case OperationTypes.MULT:
                case OperationTypes.SUB:
                case OperationTypes.DIV:
                    return (eval(state) || "0") + action.value;
                case OperationTypes.RESULT:
                    return (eval(state) || "0")
            }
        default:
            return state;
    }
}

export default buffer;
