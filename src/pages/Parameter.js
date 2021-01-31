import React from "react"
import ContentBox from "../components/ContentBox"
import ErrorBoundary from "../components/ErrorBoundary"
import { PageContent } from "./__styled__"

const ParamPage = () => (
  <PageContent horizontal={true}>
    <h1>Game Setting Parameter</h1>
    <ErrorBoundary title=" Make sure Mock server is on">
      <ContentBox page="param" />
    </ErrorBoundary>
  </PageContent>
)

export default ParamPage
