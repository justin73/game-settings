import { cleanup } from "@testing-library/react"
import { takeLatest, call, put } from "redux-saga/effects"
import { parameterList } from "../../fixtures/parameterList"
import {
  loadParamListSuccess,
  loadParamListFail,
  loadParamList
} from "../../reducers/paramSlice"
import watchParam, { handleParamLoad } from "../paramSaga"
import { fetchParamList } from "../utils/param"

describe("param saga ====> ", () => {
  describe("/ param watcher saga", () => {
    const genObject = watchParam()
    afterEach(() => cleanup)
    it("should listen to param related actions", () => {
      expect(genObject.next().value).toEqual(
        takeLatest(loadParamList, handleParamLoad)
      )
      expect(genObject.next().done).toBeTruthy()
    })
  })

  describe("/ loading worker saga ====> ", () => {
    afterEach(() => cleanup)
    it("should get param list from API and call success action", () => {
      const genObject = handleParamLoad()
      expect(genObject.next().value).toEqual(call(fetchParamList))
      expect(genObject.next(parameterList).value).toEqual(
        put(loadParamListSuccess(parameterList))
      )
      expect(genObject.next().done).toBeTruthy()
    })

    it("should fail to load param list from API and call error action", () => {
      const genObject = handleParamLoad()
      const campaignList = []
      expect(genObject.next().value).toEqual(call(fetchParamList))
      expect(
        genObject.throw({ message: "test error", code: 123 }).value
      ).toEqual(put(loadParamListFail({ message: "test error", code: 123 })))
      expect(genObject.next().done).toBeTruthy()
    })
  })
})
