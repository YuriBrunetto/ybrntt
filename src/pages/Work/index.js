import React, { Component } from 'react'
import ReactPageScroller from 'react-page-scroller'

// Components
import Layout from '../../layout'
import ContentHeader from '../../components/content/ContentHeader'
import Project from '../../components/work/Project'

import { Container } from './styles'

export default class extends Component {
  state = {
    appIsMounted: false
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ appIsMounted: true })
    })
  }

  goToPage = pageNumber => {
    this.reactPageScroller.goToPage(pageNumber)
  }

  render() {
    const { appIsMounted } = this.state

    return (
      <Layout>
        <Container>
          <section className="content">
            <ContentHeader title="Work" subtitle="Some of my work." />

            <div className="projects">
              {appIsMounted && (
                <ReactPageScroller
                  ref={c => (this.reactPageScroller = c)}
                  containerWidth="100%"
                  containerHeight={400}
                >
                  {[1, 2, 3, 4].map((item, i) => (
                    <Project key={i} i={i} />
                  ))}
                </ReactPageScroller>
              )}
            </div>
          </section>
        </Container>
      </Layout>
    )
  }
}
