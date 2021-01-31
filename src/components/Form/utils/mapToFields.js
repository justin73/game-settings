/**
 * function to extra the top level container in order to get the metadata of the parameter
 * such as title, description.etc
 * @param {object} schema
 */
export const getFormInfo = ({ schema }) => {
  let paramObj = {
    title: schema.title,
    description: schema.description
  }
  return {
    paramObj,
    formSchema: schema
  }
}

export const mapToFields = ({ field }) => {
  const fieldType = (() => {
    if (field.enum) return "select"
    return "input"
  })()
  switch (field.type) {
    case "string":
      return {
        type: "text",
        fieldType,
        ...(field.enum && { options: field.enum })
      }
    case "number":
      return {
        type: "number",
        fieldType,
        ...(field.enum && { options: field.enum })
      }
    default:
      return
  }
}
