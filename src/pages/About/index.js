import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'

// Components
import Layout from '../../layout'
import Button from '../../components/common/Button'
import Placeholder from '../../components/common/Placeholder'

import { Container } from './styles'

export default class extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <section className="content">
            <header id="about-header">
              <div className="title">
                <h1 className="common-title">
                  Hello, I'm Yuri!
                  <br />
                  Front-end Developer &amp;
                  <br />
                  open-source enthusiast
                </h1>
              </div>
              <LazyLoad height={400} placeholder={<Placeholder />}>
                <figure>
                  <img src="/img/me.jpg" alt="Yuri Brunetto" />
                </figure>
              </LazyLoad>
            </header>

            <div className="common-text">
              <p>
                I started my professional career in an agency when I was 15 - as
                a designer. Later on, I decided to become a programmer (I was
                using C# at the time). I worked there for a couple of years, and
                then I moved to another agency, focusing on front-end
                development - where I learned most of my JavaScript's first
                skills. 3 years later I moved to a much bigger agency - in a big
                city - and there I learned a lot about PHP, React, Ionic, React
                Native and other frameworks.
                <br />
                <br />
                Now I'm currently working as a Front-end Developer @ <a href="https://meempresta.net/" title="MeEmpresta">MeEmpresta</a>.
              </p>
            </div>

            <Button
              href="/curriculum.pdf"
              title="Download my CV / Curriculum"
            />
          </section>
        </Container>
      </Layout>
    )
  }
}
