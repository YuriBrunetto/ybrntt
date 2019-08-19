import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'

import GlobalStyle from './GlobalStyle'

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
