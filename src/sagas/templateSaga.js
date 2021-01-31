import { takeLatest, put, call } from "redux-saga/effects"
import {
  loadTempListSuccess,
  loadTempListFail,
  loadTempList,
  submitTemp,
  deleteTemp
} from "../reducers/templateSlice"
import {
  fetchTempList,
  createTemplate,
  deleteTemplate,
  updateTemplate
} from "./utils/template"

export const handleTempLoad = function* ({ payload }) {
  const { paramId } = payload

  try {
    const tempList = yield call(fetchTempList, {
      paramId
    })
    yield put(loadTempListSuccess(tempList))
  } catch (err) {
    yield put(loadTempListFail(err))
  }
}

export const handleTempSubmit = function* ({ payload }) {
  const { paramId, id } = payload
  try {
    yield call(id ? updateTemplate : createTemplate, payload)
    yield put(loadTempList({ paramId }))
  } catch (err) {
    yield put(
      loadTempListFail({
        errorResponse: err.response.data
      })
    )
  }
}

export const handleTempDelete = function* ({ payload }) {
  const { id, paramId } = payload
  try {
    yield call(deleteTemplate, id)
    yield put(loadTempList({ paramId }))
  } catch (err) {
    yield put(
      loadTempListFail({
        errorResponse: err.response.data
      })
    )
  }
}

export default function* watchParam() {
  yield takeLatest(loadTempList, handleTempLoad)
  yield takeLatest(submitTemp, handleTempSubmit)
  yield takeLatest(deleteTemp, handleTempDelete)
}
