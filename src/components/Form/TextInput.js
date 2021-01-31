import { useField } from "formik"
import { PropTypes } from "prop-types"

const TextInputField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

TextInputField.propTypes = {
  label: PropTypes.string
}

export default TextInputField
