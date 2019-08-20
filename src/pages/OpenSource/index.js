import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { FaStar } from 'react-icons/fa'
import Emoji from 'react-emoji-render'
import Loader from 'react-loader-spinner'

// Components
import Layout from '../../layout'
import ContentHeader from '../../components/content/ContentHeader'
import Button from '../../components/common/Button'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
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
    const { repos, loading } = this.state

    return (
      <Layout>
        <Container>
          <section className="content">
            <ContentHeader
              title="Open-Source projects"
              subtitle="Projects made by me, for the world."
            />

            {loading ? (
              <div className="loading">
                <Loader type="Oval" color="#706FD3" height={40} width={40} />
              </div>
            ) : (
              <>
                <div className="repos">
                  {repos.map((repo, i) => (
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
                  <Button
                    href="https://github.com/YuriBrunetto"
                    title="See more"
                  />
                </div>
              </>
            )}
          </section>
        </Container>
      </Layout>
    )
  }
}
