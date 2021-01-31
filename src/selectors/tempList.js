const getTempListReducer = state => state.template

export const getTempListLoadingStatus = state =>
  getTempListReducer(state).isLoading

export const getTempListLoadingError = state => getTempListReducer(state).error

export const getTempList = state => getTempListReducer(state).templateList
