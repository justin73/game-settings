import { DamageSchema } from "./Damage"
import { DifficultySchema } from "./Difficulty"
import { MetaSchema } from "./Meta"
import { WarningSchema } from "./Warning"

const merge = (...schemas) => {
  const [first, ...rest] = schemas

  const merged = rest.reduce(
    (mergedSchemas, schema) => mergedSchemas.concat(schema),
    first
  )

  return merged
}

export const schemaMapping = id => {
  switch (id) {
    case "123":
      return merge(MetaSchema, DifficultySchema)
    case "456":
      return merge(MetaSchema, DamageSchema)
    default:
      return merge(MetaSchema, WarningSchema)
  }
}
