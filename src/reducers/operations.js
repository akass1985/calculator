const initialState = {
    v1: '0',
    op: '+',
    v2: '',
    res: 0
}

const digits = ['0','1','2','3','4','5','6','7','8','9','.']
const simpleOprs = ['+', '-', '*', '/', '=']
const extOprs = ['%', 'AC', '<-']

const operations = (state = initialState, action) => {
    switch (action.type) {
        case 'OP':
            if (digits.indexOf(action.value) > -1) {
                return Object.assign(
                        {},
                        state,
                        {
                            v2: `${state.v2}${action.value}`
                        })
            } else if (simpleOprs.indexOf(action.value) > -1) {
                if (state.op !== ''){
                    if (state.op !== action.value){
                        return Object.assign(
                                {}, 
                                state, 
                                { 
                                    v1: eval(`${state.v1}${state.op}${state.v2}`),
                                    op: '',
                                    v2: ''

                                })
                    } else {
                        return Object.assign(
                                {},
                                state,
                                {
                                    v1: state.v2,
                                    op: action.value,
                                    v2: ''
                                })
                    }
                } else {
                    return Object.assign(
                            {},
                            state,
                            {
                                op: action.value
                            })
                        }
                    }
        default:
          return state
          }
    }

export default operations