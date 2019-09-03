import React, { Component } from 'react'

// Components
import Layout from '../../layout'
import ContentHeader from '../../components/content/ContentHeader'
import Button from '../../components/common/Button'
import Socials from '../../components/common/Socials'

import { Container } from './styles'

export default class extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <section className="content">
            <ContentHeader
              title="Talk to me"
              subtitle="Let's work on something together!"
            />

            <div className="info">
              Do you have an idea for an awesome project? Or only just want to
              grab a coffee? E-mail me or contact me via my other social links
              down below.
              <br />
              <Button
                href="mailto:brunettoyuri@gmail.com"
                title="brunettoyuri@gmail.com"
              />
              <Socials />
            </div>
          </section>
        </Container>
      </Layout>
    )
  }
}
