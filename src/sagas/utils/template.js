import apiRequest from "./api"

export const fetchTempList = async ({ paramId }) => {
  const query = ({ templates }) => templates.getAll(paramId)
  return await apiRequest({
    query
  })
}

export const createTemplate = async data => {
  const query = ({ templates }) => templates.create(data)
  return await apiRequest({
    query
  })
}
export const updateTemplate = async ({ id, ...data }) => {
  const query = ({ templates }) => templates.update(id, data)
  return await apiRequest({
    query
  })
}

export const deleteTemplate = async id => {
  const query = ({ templates }) => templates.delete(id)
  return await apiRequest({
    query
  })
}
