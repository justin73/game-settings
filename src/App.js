import React from "react"
import Helmet from "react-helmet"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import SideNav from "./components/SideNav"
import GlobalStyle from "./GlobalStyle"
import store from "./store"

export const App = () => (
  // all kinds of providers could be added here ...
  <StoreProvider store={store}>
    <Helmet title={`Unity FE Test`} />
    <Router>
      <GlobalStyle />
      <div className="app" data-testid="app-box">
        <SideNav />
        <AppRoutes />
      </div>
    </Router>
  </StoreProvider>
)

export default App
