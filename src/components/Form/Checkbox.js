const CheckboxField = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" })
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

export default CheckboxField
