// import axios from "axios"

// export const fetchParamList = async () => {
//   const result = await axios("http://localhost:3000/schemas")
//   return result.data
// }

import apiRequest from "./api"

export const fetchParamList = async () => {
  const query = ({ parameters }) => parameters.getAll()
  return await apiRequest({ query })
}
