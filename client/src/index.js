import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducer.js'
import App from './App'
import { connectToServer } from './actions'




const loggerMiddleware = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()



store.dispatch(connectToServer())



