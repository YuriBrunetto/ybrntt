import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'
import classNames from 'classnames'

// Components
import Menu from '../Menu'

import { Container } from './styles'

class Header extends Component {
  state = {
    menuOpen: false
  }

  handleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const { menuOpen } = this.state
    const menuClasses = classNames({
      'open-menu': true,
      active: menuOpen
    })

    return (
      <Container>
        <div className="wrap">
          <Link
            to="/"
            title="Yuri Brunetto &mdash; Front-end Developer"
            className="logo"
          >
            <ReactSVG src="/svg/logo.svg" />
          </Link>

          <button
            type="button"
            onClick={() => this.handleMenu()}
            className={menuClasses}
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>

          <Menu menuOpen={menuOpen} />
        </div>
      </Container>
    )
  }
}

export default Header
