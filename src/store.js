import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import reducers from "./reducers"
import rootSaga from "./sagas"

// const persistedState = loadState()

const app = combineReducers(reducers)
const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()
let middlewares = [sagaMiddleware]

if (process.env.NODE_ENV !== "production") {
  middlewares = [...middlewares, loggerMiddleware]
}

// to reset the entire app state
export const rootReducer = (state, action) => app(state, action)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga, {
  dispatch: store.dispatch,
  state: store.getState()
})

export default store
