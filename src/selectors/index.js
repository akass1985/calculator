const selectResult = state => state.data.result || 0
export const selectBuffer = state => state.data.buffer || ""
export const selectLog = state => state.data.log

export default selectResult;