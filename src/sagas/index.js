import { all } from "redux-saga/effects"
import paramSaga from "./paramSaga"
import tempSaga from "./templateSaga"

//TODO: add more saga here

export default function* rootSaga() {
  try {
    yield all([paramSaga(), tempSaga()])
  } catch (error) {
    console.error("saga error ----> ", error)
  }
}
