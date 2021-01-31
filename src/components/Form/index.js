import React from "react"
import { useState, useEffect } from "react"
import { Formik } from "formik"
import { PropTypes } from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { submitTemp } from "../../reducers/templateSlice"
import { getSelectedParam } from "../../selectors"
import { DifficultySchema, DamageSchema, WarningSchema } from "../Schemas"
import {
  FormWrapper,
  FormMeta,
  FormFields,
  FormAction,
  StlyedForm as Form
} from "./__styled__/Form"
import SchemaForm from "./SchemaForm"
import TextInputField from "./TextInput"

const TempForm = ({ data }) => {
  const dispatch = useDispatch()
  const selectedParam = useSelector(state => getSelectedParam(state))
  const [validationSchema, setValidationSchema] = useState({})

  useEffect(() => {
    setValidationSchema(
      (() => {
        switch (selectedParam.id) {
          case "123":
            return DifficultySchema
          case "456":
            return DamageSchema
          default:
            return WarningSchema
        }
      })()
    )
  }, [selectedParam.id])

  const onSubmit = async values => {
    dispatch(submitTemp(values))
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={data}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormMeta>
            <TextInputField
              label="Title"
              name="title"
              placeholder="Enter A Title"
              type="text"
            />
            <TextInputField
              label="Description"
              name="description"
              type="text"
            />
          </FormMeta>
          <FormFields>
            <SchemaForm data={data.formData} schema={selectedParam} />
          </FormFields>
          <FormAction>
            <button type="submit">{data.id ? "Save" : "Create"}</button>
          </FormAction>
        </Form>
      </Formik>
    </FormWrapper>
  )
}

TempForm.propTypes = {
  data: PropTypes.shape({
    formData: PropTypes.object,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
}

export default TempForm
