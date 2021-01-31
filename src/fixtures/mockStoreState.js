export const mockStoreState = {
  parameter: {
    isLoading: false,
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
    ],
    selectedParam: null,
    error: null
  },
  template: {
    isLoading: false,
    templateList: [
      {
        paramId: "123",
        title: "template 1",
        description: "123",
        formData: {
          level: "easy",
          maxEnemyCount: 12
        },
        level: "111",
        id: 1
      },
      {
        paramId: "123",
        title: "012",
        description: "122",
        formData: {
          level: "easy",
          maxEnemyCount: 18
        },
        id: 2
      }
    ],
    error: null
  }
}
