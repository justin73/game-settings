import axios from "axios"
import apiConfig from "./apiConfig"
import parameters from "./parameters"
import templates from "./templates"

const API = () => {
  const { baseUrl, headers } = apiConfig
  const config = {
    baseUrl,
    headers
  }
  const options = {
    ...config,
    url: chunk => baseUrl + chunk,
    get: req =>
      axios({
        data: {},
        ...req,
        method: "GET",
        headers
      }),
    put: req =>
      axios({
        data: {},
        ...req,
        method: "PUT",
        headers
      }),
    patch: req =>
      axios({
        data: {},
        ...req,
        method: "PATCH",
        headers
      }),
    post: req =>
      axios({
        data: {},
        ...req,
        method: "POST",
        headers
      }),
    del: req =>
      axios({
        data: {},
        ...req,
        method: "DELETE",
        headers
      })
  }

  return {
    config,
    //TODO: add all other endpoints here
    parameters: parameters(options),
    templates: templates(options)
  }
}

export default API
