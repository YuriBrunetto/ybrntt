import React, { Component } from 'react'

// Components
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default class extends Component {
  render() {
    return (
      <>
        <Header />

        <main id="main">
          <div className="common-limiter">{this.props.children}</div>
        </main>

        <Footer />
      </>
    )
  }
}
