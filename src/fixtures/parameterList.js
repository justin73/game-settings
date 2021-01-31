export const parameterList = {
  paramList: [
    {
      id: "123",
      title: "Difficulty",
      description: "A simple form example.",
      type: "object",
      properties: {
        level: {
          type: "string",
          enum: ["easy", "hard"]
        },
        maxEnemyCount: {
          type: "number"
        }
      }
    },
    {
      id: "456",
      title: "Grande Damage",
      description: "Another simple form example.",
      type: "object",
      properties: {
        damage: {
          type: "number"
        },
        radius: {
          type: "number"
        }
      }
    }
  ]
}
