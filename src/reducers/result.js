import ActionTypes from '../actions'

const result = (state = 0, action) => {
    switch(action.type){
        case ActionTypes.DIGIT:
            return state + "" + action.value
        case ActionTypes.OPERATION:
            return ""
        default:
            return state;
    }
}

export default result;
