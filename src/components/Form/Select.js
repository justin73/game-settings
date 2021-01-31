import { useField } from "formik"
import { PropTypes } from "prop-types"
import {
  StyledSelect,
  StyledErrorMessage,
  StyledLabel
} from "./__styled__/Form"

const SelectField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  )
}

SelectField.propTypes = {
  label: PropTypes.string
}

export default SelectField
