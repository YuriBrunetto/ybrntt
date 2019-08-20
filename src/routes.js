import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import OpenSource from './pages/OpenSource'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/open-source" component={OpenSource} />
    </Switch>
  </BrowserRouter>
)

export default Routes
