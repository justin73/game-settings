import api from "../../api"

const logResponse = res => {
  try {
    console.info("data", res.data)
  } catch (exception) {
    console.warn(
      "middleware/api logger exception, not a valid network response",
      exception
    )
  }
  return res
}

const handleError = err => {
  try {
    console.groupCollapsed(err.message)
    console.dir(err.response)
    console.info("status:", err.response.status)
    console.info("headers:", err.response.headers)
    console.info("network error:", err.response.data)
    console.groupEnd()
  } catch (exception) {
    console.warn(
      "middleware/api logger exception, not a valid network error",
      exception
    )
  }
}

export default obj => {
  const { query = () => Promise.resolve(), disableLogger } = obj

  return query(api())
    .then(res => {
      if (!disableLogger) logResponse(res)
      return res.data
    })
    .catch(error => {
      if (!disableLogger) handleError(error)
      throw error
    })
}
