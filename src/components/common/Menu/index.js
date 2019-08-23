import React from 'react'
import { Link } from 'react-router-dom'

import { Nav } from './styles'

const Menu = () => (
  <Nav>
    <Link to="/about" title="About" className="nav-a">
      About
    </Link>
    <Link to="/open-source" title="Open-source" className="nav-a">
      Open-source
    </Link>
    <Link to="/work" title="Work" className="nav-a">
      Work
    </Link>
    <Link to="/talk-to-me" title="Talk to me" className="nav-a">
      Talk to me
    </Link>
  </Nav>
)

export default Menu
