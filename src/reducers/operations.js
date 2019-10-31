const initialState = {
    v1: '0',
    op: '+',
    v2: '',
    res: 0
}

const isDigit = symbol => (['0','1','2','3','4','5','6','7','8','9','.'].indexOf(symbol)) > -1
const isOp = symbol => (['+','-','*','/'].indexOf(symbol)) > -1
const extOp = ['=', '%', 'AC', '<-']

const operations = (state = initialState, action) => {
    switch (action.type) {
        case 'OP':
            if (isDigit(action.value)) {
                const res = parseFloat(`${state.v2}${action.value}`).toString();
                return Object.assign(
                        {},
                        state,
                        {
                            v2: res,
                            res: res
                        }
		)
            } else if (isOp(action.value)) {
                if (state.op !== ''){
                    const res = eval(`${state.v1}${state.op}${state.v2}`) 
                    return Object.assign(
                        {}, 
                        state, 
                        { 
                            v1: res,
                            op: action.value,
                            v2: '',
                            res: res
                        }
		    )
                } else {
                    return Object.assign(
                            {},
                            state,
                            {
                                op: action.value
                            }
		    )
                }
           } else {
               switch (action.value){
	           case '=':
	               const res = eval(`${state.v1}${state.op}${state.v2}`).toString
		       return Object.assign(
		           {},
			   state,
			   {
		               v1: res,
			       res: res
			   }
		       )
	           case '%': return state
	           case 'AC': return initialState
		   case '<-':
	               if (state.v2.length <= 1){
		           return Object.assign(
		               {},
			       state,
			       {
			           v2: '',
				   res: 0
			       }
			   )
		       } else {
		           return Object.assign(
		               {},
			       state,
			       {
			           v2: parseFloat(state.v2.slice(0, state.v2.length-1)).toString(),
				   res: 0
			       }
			   )
		       }
	       }
	   }
        default:
          return state
          }
    }

export default operations
