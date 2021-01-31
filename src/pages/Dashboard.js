import ErrorBoundary from "../components/ErrorBoundary"
import { PageContent } from "./__styled__/index"

const Dashboard = () => {
  return (
    <PageContent horizontal={true}>
      <h1>Editor</h1>
      <ErrorBoundary title=" Make sure Mock server is on">
        TODO: Event Editor (apply parameter with predefined template configured
        in the parameter panel)
      </ErrorBoundary>
    </PageContent>
  )
}

export default Dashboard
