import * as Yup from "yup"

export const MetaSchema = Yup.object({
  title: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  description: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required")
})
