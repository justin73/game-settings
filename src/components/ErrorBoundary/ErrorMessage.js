import React from "react"
import BugReportIcon from "@material-ui/icons/BugReport"
import { PropTypes } from "prop-types"
import { ErrorMsgWrapper } from "./__styled__/ErrorMessage"

const ErrorMessage = ({ title, error }) => (
  <ErrorMsgWrapper>
    <BugReportIcon />
    <h4>Something went wrong when loading: {title}</h4>
    {error && (
      <p>
        {error.code} - {error.msg}
      </p>
    )}
  </ErrorMsgWrapper>
)

ErrorMessage.propTypes = {
  title: PropTypes.string,
  error: PropTypes.object
}

export default ErrorMessage
