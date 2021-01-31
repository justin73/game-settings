import paramSlice from "../paramSlice"

const mockInitialStateParam = {
  isLoading: false,
  paramList: [],
  selectedParam: null,
  error: null
}

describe("parameter list reducer", () => {
  it("should handle initial state", () => {
    expect(paramSlice(undefined, {})).toEqual(mockInitialStateParam)
  })
  it("should initiate loading source list", () => {
    expect(
      paramSlice(mockInitialStateParam, {
        type: "PARAMETER/loadParamList"
      })
    ).toEqual({
      ...mockInitialStateParam,
      isLoading: true
    })
  })
  it("should fail at loading param list", () => {
    expect(
      paramSlice(mockInitialStateParam, {
        type: "PARAMETER/loadParamListFail",
        payload: { errCode: 123, errMsg: "123", type: "network" }
      })
    ).toEqual({
      ...mockInitialStateParam,
      isLoading: false,
      error: { errCode: 123, errMsg: "123", type: "network" }
    })
  })
  it("should successfully loading source list", () => {
    expect(
      paramSlice(mockInitialStateParam, {
        type: "PARAMETER/loadParamListSuccess",
        payload: [1, 2, 3, 4]
      })
    ).toEqual({
      ...mockInitialStateParam,
      isLoading: false,
      paramList: [1, 2, 3, 4]
    })
  })
})
