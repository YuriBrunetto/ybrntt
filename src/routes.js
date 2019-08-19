import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from './pages/Home'

// Styles
import GlobalStyle from './GlobalStyle'

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </>
)

export default Routes
