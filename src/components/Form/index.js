import React from "react"
import { Formik } from "formik"
import { PropTypes } from "prop-types"
import { useDispatch } from "react-redux"
import { submitTemp } from "../../reducers/templateSlice"
import {
  FormWrapper,
  FormMeta,
  FormFields,
  FormField,
  FormAction,
  StlyedForm as Form
} from "./__styled__/Form"
import { DifficultySchema } from "./Schemas/Difficulty"
import SelectField from "./Select"
import TextInputField from "./TextInput"

const TempForm = ({ data }) => {
  const dispatch = useDispatch()
  const onSubmit = async values => dispatch(submitTemp(values))

  return (
    <FormWrapper>
      <Formik
        initialValues={data}
        validationSchema={DifficultySchema}
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
            <FormField>
              <SelectField label="Difficulty Level" name="formData.level">
                <option value="">Select A Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="hard">Hard</option>
              </SelectField>
            </FormField>
            <FormField>
              <TextInputField
                label="maxEnemyCount"
                name="formData.maxEnemyCount"
                type="number"
              />
            </FormField>
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
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    formData: PropTypes.shape({
      level: PropTypes.string.isRequired,
      maxEnemyCount: PropTypes.number.isRequired
    })
  })
}

export default TempForm
