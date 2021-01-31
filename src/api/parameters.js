export const getParams = ({ get, url }) => () =>
  get({
    url: url("/parameters")
  })

export default config => ({
  getAll: getParams(config)
})
