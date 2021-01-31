import React from "react"
import { render, cleanup } from "@testing-library/react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import ParamList from "../"
import { mockStoreState } from "../../../fixtures/mockStoreState"
afterEach(() => cleanup)

const mockStore = configureStore([])

describe("ParamList Component ----> ", () => {
  let store
  beforeEach(() => {
    store = mockStore(mockStoreState)
  })
  afterEach(() => cleanup)

  it("renders ParamList Section without crash", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <Provider store={store}>
        <ParamList />
      </Provider>,
      div
    )
  })

  it("renders a param list with two elements", () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <ParamList />
      </Provider>
    )
    expect(getAllByRole("item").length).toEqual(2)
  })
})
