const selectResult = state => state.data.result || 0
export const selectBuffer = state => state.data.buffer || ""

export default selectResult;