import React from "react"
import { mockSchema, mockData } from "../../../fixtures/template"
import TemplateItem from "../TemplateItem"

export default {
  title: "TemplateItem",
  component: TemplateItem
}

const Template = args => <TemplateItem {...args} />

export const EditTemplate = Template.bind({})
EditTemplate.args = {
  schema: mockSchema,
  data: mockData,
  onDelete: action("click to delete this item")
}

export const NewTemplate = Template.bind({})
NewTemplate.args = {
  schema: mockSchema,
  data: {
    title: "",
    description: "",
    formData: { level: "", maxEnemyCount: 0 }
  },
  onDelete: action("click to delete this item")
}
