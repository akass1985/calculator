const ActionTypes = {
    DIGIT: "DIGIT",
    OPERATION: "OPERATION",
    OP_AC: "AC",
    OP_DEL_LAST: "<-",
    OP_PERCENT: "%",
    OP_MULT: "*",
    OP_SUB: "-",
    OP_SUM: "+",
    OP_DIV: "/",
    OP_RESULT: "="
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