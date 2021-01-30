import React from "react"
import Helmet from "react-helmet"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import GlobalStyle from "./GlobalStyle"

export const App = () => (
  // all kinds of providers could be added here ...
  <>
    <Helmet title={`Unity FE Test`} />
    <Router>
      <GlobalStyle />
      <div className="app">
        <AppRoutes />
      </div>
    </Router>
  </>
)

export default App
