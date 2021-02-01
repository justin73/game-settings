import * as Yup from "yup"

export const DamageSchema = Yup.object().shape({
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
