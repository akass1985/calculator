const ActionTypes = {
    DIGIT: "DIGIT",
    OPERATION: "OPERATION",
}

export const OperationTypes = {
    AC: "AC",
    DEL_LAST: "<-",
    PERCENT: "%",
    MULT: "*",
    SUB: "-",
    SUM: "+",
    DIV: "/",
    RESULT: "="
}

export const digit = value => ({
    type: ActionTypes.DIGIT,
    value
})

export const operation = value => ({
    type: ActionTypes.OPERATION,
    value
})

export default ActionTypes;