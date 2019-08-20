import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
)

export default Routes
