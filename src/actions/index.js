const ActionTypes = {
    DIGIT: "DIGIT",
    OPERATION: "OPERATION",
    BATCH: "BATCH"
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

export const batch = value => ({
    type: ActionTypes.BATCH,
    value
})

export default ActionTypes;