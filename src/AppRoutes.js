import { Suspense } from "react"
import { lazy } from "@loadable/component"
import { Switch, Route } from "react-router-dom"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Parameter = lazy(() => import("./pages/Parameter"))

const AppRoutes = () => (
  <Suspense fallback={"loading..."}>
    <Switch>
      {/* add more routes here */}
      <Route exact component={props => <Parameter {...props} />} path="/" />
      <Route
        exact
        component={props => <Dashboard {...props} />}
        path="/editor"
      />
    </Switch>
  </Suspense>
)

export default AppRoutes
