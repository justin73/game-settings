import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import * as ReactRedux from "react-redux"
import configureStore from "redux-mock-store"
import TemplateList from "../"
import { mockStoreState } from "../../../fixtures/mockStoreState"

const mockStore = configureStore([])
describe("TemplateList Component ----> ", () => {
  let store
  beforeEach(() => {
    store = mockStore(mockStoreState)
  })
  afterEach(() => cleanup)

  it("renders TemplateList Section without crash", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <Provider store={store}>
        <TemplateList />
      </Provider>,
      div
    )
  })
  it("renders empty place holder in the template list panel when no param is selected", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TemplateList />
      </Provider>
    )

    expect(getByTestId("placeholderText")).toBeInTheDocument()
    expect(getByTestId("placeholderText")).toHaveTextContent(
      "Please select a parameter"
    )
  })
})

describe("actions in the template list ----> ", () => {
  let updatedStore
  const mockDispatch = jest.fn()
  beforeAll(() => {
    ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch)
  })
  beforeEach(() => {
    ReactRedux.useDispatch.mockClear()
    const selectedParamState = {
      id: "123",
      title: "Difficulty",
      description: "A simple form example.",
      type: "object",
      properties: {
        level: {
          type: "string",
          enum: ["easy", "hard"]
        },
        maxEnemyCount: {
          type: "number"
        }
      }
    }

    const stateWithParamSelected = {
      ...mockStoreState,
      parameter: {
        ...mockStoreState.parameter,
        selectedParam: selectedParamState
      }
    }
    updatedStore = mockStore(stateWithParamSelected)
  })
  it("renders a create button and matching templates in the template list panel", () => {
    const { getByTestId, getAllByRole } = render(
      <Provider store={updatedStore}>
        <TemplateList />
      </Provider>
    )

    expect(getByTestId("createBtn")).toBeInTheDocument()
    expect(getAllByRole("item").length).toEqual(2)
  })
  it("adds a new template after clicking create btn", async () => {
    const useDispatchSpy = jest.spyOn(ReactRedux, "useDispatch")
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn)

    const { getByTestId, getAllByRole } = render(
      <Provider store={updatedStore}>
        <TemplateList />
      </Provider>
    )

    fireEvent.click(getByTestId("createBtn"))
    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {
        title: "",
        description: "",
        formData: {
          level: "",
          maxEnemyCount: 0
        },
        paramId: "123"
      },
      type: "TEMPLATE/addNewTemp"
    })
  })
})
