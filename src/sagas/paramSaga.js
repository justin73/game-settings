import { takeLatest, put, call } from "redux-saga/effects"
import {
  loadParamListSuccess,
  loadParamListFail,
  loadParamList
} from "../reducers/paramSlice"
import { fetchParamList } from "./utils/param"

export const handleParamLoad = function* () {
  try {
    const paramList = yield call(fetchParamList)
    yield put(loadParamListSuccess(paramList))
  } catch (err) {
    yield put(loadParamListFail(err))
  }
}

export default function* watchParam() {
  yield takeLatest(loadParamList, handleParamLoad)
}
