import * as Yup from "yup"

export const DamageSchema = Yup.object().shape({
  title: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  description: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  formData: Yup.object().shape({
    damage: Yup.number()
      .required("must be a valid number")
      .positive()
      .integer()
      .max(50),
    radius: Yup.number()
      .required("must be a valid number")
      .positive()
      .integer()
      .max(20)
  })
})
