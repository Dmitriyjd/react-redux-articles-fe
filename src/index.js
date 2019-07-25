import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { GlobalStyle } from './index.styles'
import { configureStore } from './store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'))

serviceWorker.unregister()
