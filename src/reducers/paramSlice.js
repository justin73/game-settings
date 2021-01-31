import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  paramList: [],
  selectedParam: null,
  error: null
}

const ParamSlice = createSlice({
  name: "PARAMETER",
  initialState,
  reducers: {
    setSelectedParam: (state, action) => ({
      ...state,
      selectedParam: state.paramList
        .filter(param => param.id === action.payload)
        .reduce(item => item)
    }),
    loadParamList: state => ({
      ...state,
      isLoading: true
    }),
    loadParamListSuccess: {
      reducer: (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          paramList: action.payload
        }
      }
    },
    loadParamListFail: {
      reducer: (state, action) => {
        const { error } = action.payload
        return {
          ...state,
          isLoading: false,
          error: { ...error }
        }
      },
      prepare: ({ errCode, errMsg, type }) => ({
        payload: {
          error: {
            code: errCode,
            msg: errMsg,
            type
          }
        }
      })
    },
    reset: state => ({
      ...state
    }),
    setNetworkError: state => ({
      ...state,
      error: {
        code: "511",
        msg: "Network error, please make sure you start the json server"
      }
    })
  }
})

export const {
  loadParamList,
  loadParamListSuccess,
  loadParamListFail,
  reset,
  setSelectedParam,
  setNetworkError
} = ParamSlice.actions

export default ParamSlice.reducer
