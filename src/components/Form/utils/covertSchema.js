import { PRIMITIVE } from "./CONST"
import { mapToFields } from "./mapToFields"
/**
 * fn to convert schema into form with matching fields
 * when properties field type is primitive (number, string, boolean), it is a simple form input field
 * @param {object} schema
 * @param {object} form
 * @returns {object|array} depends on the type of current schma
 */
export const convertSchemaToForm = ({ schema }) => {
  let formField,
    fieldStruc,
    dataStruc = {}

  const schemaPath = schema.properties
  fieldStruc =
    schemaPath && Object.keys(schemaPath).length // handle case when properties is empty or undefined
      ? Object.keys(schemaPath).map(field => {
          const { type } = schemaPath[field]
          formField = {
            id: field,
            type,
            ...mapToFields({ field: schemaPath[field] }) // schema field type and form element type
          }

          dataStruc = {
            ...(PRIMITIVE.includes(schemaPath[field].type) && {
              [field]: (() => {
                //calculate default field value
                switch (schemaPath[field].type) {
                  case "boolean":
                    return false
                  case "null":
                    return null
                  case "string":
                    return ""
                  case "number":
                  default:
                    return 0
                }
              })()
            })
          }
          return {
            ...formField
          }
        })
      : []

  return {
    fieldStruc,
    dataStruc
  }
}
