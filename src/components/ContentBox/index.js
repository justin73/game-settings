import { useSelector } from "react-redux"
import { getParamLoadingError } from "../../selectors"
import ParamList from "../ParamList"
import TemplateList from "../TemplateList"
import { StyledContentBox } from "./__styled__/ContentBox"

const ContentBox = () => {
  const error = useSelector(state => getParamLoadingError(state))
  return error ? (
    <>
      <h3>{`${error.code} -  ${error.msg}`}</h3>
      <p>
        Please make sure to run the json server first, run "npm run server"
        under the project root folder in the ternimal, then refresh the page
      </p>
    </>
  ) : (
    <StyledContentBox>
      <ParamList />
      <TemplateList />
    </StyledContentBox>
  )
}

export default ContentBox
