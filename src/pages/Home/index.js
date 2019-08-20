import React, { Component } from 'react'

// Layout
import Layout from '../../layout'

import { Container } from './styles'

export default class extends Component {
  render() {
    return (
      <Container>
        <Layout>
          <section className="content">
            <h1>
              Hi, I'm Yuri<span>!</span>
            </h1>
            <h2>
              Front-end developer, open-source
              <br />
              enthusiast &amp; musician.
            </h2>
          </section>
        </Layout>
      </Container>
    )
  }
}
