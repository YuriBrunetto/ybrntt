import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { FaStar } from 'react-icons/fa'
import Emoji from 'react-emoji-render'

// Components
import Layout from '../../layout'
// import ContentHeader from '../components/content/ContentHeader'

import { Container } from './styles'

export default class extends Component {
  state = {
    repos: [],
    loading: false
  }

  async getRepos() {
    this.setState({ loading: true })

    const res = await fetch(
      'https://api.github.com/users/YuriBrunetto/repos?sort=pushed'
    )
    const repos = await res.json()
    return repos
  }

  componentDidMount() {
    this.getRepos().then(repos => {
      let filteredRepos = repos.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      )
      this.setState({ repos: filteredRepos.slice(0, 6), loading: false })
    })
  }

  render() {
    return (
      <Layout>
        <Container>
          <section className="content">
            {/* <ContentHeader
            title="Open-Source projects"
            subtitle="Projects made by me, for the world."
          /> */}

            <div className="repos">
              {this.state.repos.map((repo, i) => (
                <a
                  key={i}
                  href={repo.clone_url}
                  className="repo"
                  title={repo.name}
                  target="_blank"
                >
                  <div className="title">
                    {repo.name}
                    <span>
                      <FaStar /> {repo.stargazers_count}
                    </span>
                  </div>
                  {repo.description && (
                    <div className="description">
                      <Emoji text={repo.description} />
                    </div>
                  )}
                </a>
              ))}
            </div>

            <div className="button-placeholder">
              <a
                href="https://github.com/YuriBrunetto"
                title="See more open-source projects"
                className="common-button"
                target="_blank"
              >
                See more
              </a>
            </div>
          </section>
        </Container>
      </Layout>
    )
  }
}
