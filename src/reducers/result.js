import ActionTypes from '../actions'

const result = (state = "", action) => {
    switch(action.type){
        case ActionTypes.DIGIT:
            return state + "" + action.value
        case ActionTypes.OPERATION:
            return state
        default:
            return state;
    }
}

export default result;
