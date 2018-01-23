import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducer.js'
import App from './App'


const store = createStore(reducer, applyMiddleware(logger))
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
