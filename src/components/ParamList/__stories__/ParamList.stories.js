import React from "react"
import { Provider as StoreProvider } from "react-redux"
import ParamList from "../"
import store from "../../../store.js"
export default {
  title: "ParamList",
  component: ParamList
}

const Template = args => (
  <StoreProvider store={store}>
    <ParamList {...args} />
  </StoreProvider>
)

export const DefaultList = Template.bind({})
DefaultList.args = {
  type: "string",
  label: "String Input"
}
