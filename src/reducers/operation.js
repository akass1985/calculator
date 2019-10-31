import ActionTypes from '../actions'

const result = (state = 0, action) => {
    switch(action.type){
        case ActionTypes.DIGIT:
            return false
        case ActionTypes.OPERATION:
            return true
        default:
            return state;
    }
}

export default result;
