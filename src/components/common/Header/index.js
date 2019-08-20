import React from 'react'
import { Link } from 'react-router-dom'
import ReactSVG from 'react-svg'

import { Container } from './styles'

const Header = props => (
  <Container>
    <div className="wrap">
      <Link
        to="/"
        title="Yuri Brunetto &mdash; Front-end Developer"
        className="logo"
      >
        <ReactSVG src="/svg/logo.svg" />
      </Link>

      <nav>
        <Link to="/about" title="About" className="nav-a">
          About
        </Link>
        <Link to="/open-source" title="Open-source" className="nav-a">
          Open-source
        </Link>
        <Link to="/work" title="Work" className="nav-a">
          Work
        </Link>
        <Link to="/" title="Talk to me" className="nav-a">
          Talk to me
        </Link>
      </nav>
    </div>
  </Container>
)

export default Header
