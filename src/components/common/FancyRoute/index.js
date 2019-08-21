import React, { Component } from 'react'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import { StyledRoute } from './styles'

class FancyRoute extends Component {
  componentWillMount() {
    nprogress.start()
  }

  componentDidMount() {
    nprogress.done()
  }

  render() {
    return <StyledRoute {...this.props} />
  }
}

export default FancyRoute
