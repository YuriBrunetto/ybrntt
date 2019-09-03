import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import FancyRoute from './components/common/FancyRoute'
import routes from './routes'

import GlobalStyle from './GlobalStyle'

ReactDOM.render(
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
  document.getElementById('root'),
)

// serviceWorker.unregister()
