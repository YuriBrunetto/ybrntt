import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import FancyRoute from './components/common/FancyRoute'
import routes from './routes'

import GlobalStyle from './GlobalStyle'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  hydrate(
    <>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <FancyRoute key={i} {...route} />
          ))}
        </Switch>
      </Router>
      <GlobalStyle />
    </>,
    rootElement
  )
} else {
  render(
    <>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <FancyRoute key={i} {...route} />
          ))}
        </Switch>
      </Router>
      <GlobalStyle />
    </>,
    rootElement
  )
}

// serviceWorker.unregister()
