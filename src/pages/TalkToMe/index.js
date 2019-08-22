import React, { Component } from 'react'

// Components
import Layout from '../../layout'
import ContentHeader from '../../components/content/ContentHeader'
import Button from '../../components/common/Button'

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio modi dolore ea nihil molestiae? Commodi, nostrum.
              <br />
              <Button
                href="mailto:brunettoyuri@gmail.com"
                title="brunettoyuri@gmail.com"
              />
            </div>
          </section>
        </Container>
      </Layout>
    )
  }
}
