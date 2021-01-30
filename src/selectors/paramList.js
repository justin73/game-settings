// import { createSelector } from "reselect"

const getParamListReducer = state => state.parameter

export const getParamLoadingStatus = state =>
  getParamListReducer(state).isLoading

export const getParamLoadingError = state => getParamListReducer(state).error

export const getParamList = state => getParamListReducer(state).paramList

export const getSelectedParam = state =>
  getParamListReducer(state).selectedParam
