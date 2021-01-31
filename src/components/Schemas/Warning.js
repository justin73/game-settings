import * as Yup from "yup"

export const WarningSchema = Yup.object().shape({
  title: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  description: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  formData: Yup.object().shape({
    message: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    numOfTimes: Yup.number()
      .required("must be a valid number")
      .positive()
      .integer()
      .max(5)
  })
})
