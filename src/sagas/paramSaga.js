import { takeLatest, put, call } from "redux-saga/effects"
import {
  loadParamListSuccess,
  loadParamListFail,
  loadParamList,
  setNetworkError
} from "../reducers/paramSlice"
import { fetchParamList } from "./utils/param"

export const handleParamLoad = function* () {
  try {
    const paramList = yield call(fetchParamList)
    yield put(loadParamListSuccess(paramList))
  } catch (err) {
    if (err.message === "Network Error") {
      yield put(setNetworkError())
      throw err
    }

    yield put(loadParamListFail(err))
  }
}

export default function* watchParam() {
  yield takeLatest(loadParamList, handleParamLoad)
}
