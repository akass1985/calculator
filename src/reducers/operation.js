import ActionTypes from '../actions'

const operation = (state = false, action) => {
    switch(action.type){
        case ActionTypes.DIGIT:
            return false
        case ActionTypes.OPERATION:
            return true
        default:
            return state;
    }
}

export default operation;
