import React from 'react'
import { Link } from 'react-router-dom'
import ReactSVG from 'react-svg'
import { MdMenu } from 'react-icons/md'

// Components
import Menu from '../Menu'

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

      <button type="button" className="open-menu">
        <MdMenu />
      </button>

      <Menu />
    </div>
  </Container>
)

export default Header
