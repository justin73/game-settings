export const getTemplates = ({ get, url }) => paramId =>
  get({
    url: url(`/templates?paramId=${paramId}`)
  })

export const createTemplate = ({ post, url }) => data =>
  post({
    url: url("/templates"),
    data
  })

export const deleteTemplate = ({ del, url }) => id =>
  del({
    url: url(`/templates/${id}`)
  })

export const updateTemplate = ({ put, url }) => (id, data) =>
  put({
    url: url(`/templates/${id}`),
    data
  })

export default config => ({
  getAll: getTemplates(config),
  create: createTemplate(config),
  update: updateTemplate(config),
  delete: deleteTemplate(config)
})
