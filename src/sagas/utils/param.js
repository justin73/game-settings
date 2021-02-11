import apiRequest from "./api"

export const fetchParamList = async () => {
  const query = ({ parameters }) => parameters.getAll()
  return await apiRequest({ query })
}
