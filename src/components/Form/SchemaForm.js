import React from "react"
import { useEffect, useState } from "react"
import { nanoid } from "@reduxjs/toolkit"
import SelectField from "./Select"
import TextInputField from "./TextInput"
import { convertSchemaToForm } from "./utils/covertSchema"
import { getFormInfo } from "./utils/mapToFields"

const SchemaForm = ({ schema }) => {
  const [fields, setFields] = useState([])
  useEffect(() => {
    // change schema into a formFieldBased data structure
    // step 1: remove the container level from the schema
    const { formSchema } = getFormInfo({ schema })

    // step 2: extract form fields and matching form data structure
    const { fieldStruc } = convertSchemaToForm({
      schema: formSchema
    })
    setFields(fieldStruc)
  }, [schema])

  return fields.map(field => {
    const fieldProps = {
      id: field.id,
      label: field.id,
      name: `formData.${field.id}`,
      type: field.type,
      key: nanoid()
    }
    switch (field.fieldType) {
      case "select":
        return (
          <SelectField {...fieldProps}>
            <option value="">Select A Difficulty Level</option>
            {field.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </SelectField>
        )
      case "checkbox":
        return <CheckboxField {...fieldProps} />

      default:
        return <TextInputField {...fieldProps} />
    }
  })
}

export default SchemaForm
