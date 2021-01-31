import React from "react"
import loadable from "@loadable/component"
import { PropTypes } from "prop-types"
const ErrorMessage = loadable(() => import("./ErrorMessage"))

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.error(error)
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error(error, info)
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorMessage title={this.props.title} />
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
