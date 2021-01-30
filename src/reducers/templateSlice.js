import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  templateList: [],
  error: null
}

const TemplateSlice = createSlice({
  name: "TEMPLATE",
  initialState,
  reducers: {
    loadTempList: state => ({
      ...state,
      isLoading: true
    }),
    loadTempListSuccess: {
      reducer: (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          templateList: action.payload
        }
      }
    },
    loadTempListFail: {
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
    addNewTemp: (state, action) => ({
      ...state,
      templateList: state.templateList.concat(action.payload)
    }),
    submitTemp: state => ({
      ...state
    }),
    deleteTemp: state => ({
      ...state
    })
  }
})

export const {
  loadTempList,
  loadTempListSuccess,
  loadTempListFail,
  reset,
  addNewTemp,
  submitTemp,
  deleteTemp
} = TemplateSlice.actions

export default TemplateSlice.reducer
