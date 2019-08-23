import React, { Component } from 'react'

// Components
import Layout from '../../layout'
import Socials from '../../components/common/Socials'
import Button from '../../components/common/Button'

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
            <Socials />
            <Button to="/work" title="See my work" />
          </section>
        </Layout>
      </Container>
    )
  }
}
