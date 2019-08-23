import React, { Component } from 'react'
import ReactPageScroller from 'react-page-scroller'
import workItems from '../../static/work.json'

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
            <ContentHeader
              title="Work"
              subtitle={
                'A few projects I worked as <em>front-end developer</em>.'
              }
            />

            <div className="projects">
              {appIsMounted && (
                <ReactPageScroller
                  ref={c => (this.reactPageScroller = c)}
                  containerWidth="100%"
                  containerHeight={window.innerHeight - 400}
                >
                  {workItems.map((item, i) => (
                    <Project key={i} item={item} i={i} />
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
