import ActionTypes from '../actions'

const buffer = (state = 0, action) => {
    switch(action.type){
        case ActionTypes.DIGIT: {
            return state + "" + action.value;
        }
        case ActionTypes.OPERATION:
            switch (action.value){
                case ActionTypes.OP_SUM:
                case ActionTypes.OP_MULT:
                case ActionTypes.OP_SUB:
                case ActionTypes.OP_DIV:
                    return (eval(state) || "0") + action.value;
                case ActionTypes.OP_RESULT:
                    return (eval(state) || "0")
            }
        default:
            return state;
    }
}

export default buffer;
