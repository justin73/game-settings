import * as Yup from "yup"

export const DifficultySchema = Yup.object({
  title: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  description: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  formData: Yup.object().shape({
    level: Yup.string().required("level required"),
    maxEnemyCount: Yup.number()
      .required("must be a valid number")
      .positive()
      .integer()
      .when("level", {
        is: level => level === "easy",
        then: Yup.number().min(5).max(20),
        otherwise: Yup.number().min(21).max(40)
      })
  })
})
