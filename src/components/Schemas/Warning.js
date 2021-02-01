import * as Yup from "yup"

export const WarningSchema = Yup.object().shape({
  formData: Yup.object().shape({
    message: Yup.string()
      .max(30, "Must be 15 characters or less")
      .required("Required"),
    numOfTimes: Yup.number()
      .required("must be a valid number")
      .positive()
      .integer()
      .max(5)
  })
})
