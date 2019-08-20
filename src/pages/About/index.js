import React, { Component } from 'react'

// Components
import Layout from '../../layout'

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
              <figure>
                <img src="/img/me.jpg" alt="Yuri Brunetto" />
              </figure>
            </header>

            <div className="common-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vestibulum pellentesque nulla, sit amet venenatis nulla
                vestibulum non. Maecenas mi leo, luctus in lacus non, congue
                placerat diam. Aenean facilisis condimentum viverra. Aenean
                pretium augue quis dui placerat, eget cursus velit ultricies.
                Maecenas hendrerit euismod enim eu faucibus. Nunc aliquam neque
                nec rhoncus gravida. Aliquam sit amet elit quis risus sodales
                dictum. Ut sit amet porttitor est, sit amet commodo lacus.
                <br />
                <br />
                Donec placerat velit at justo tincidunt, sit amet iaculis diam
                eleifend. Phasellus ligula neque, ultricies sit amet ante sed,
                sollicitudin fermentum nisi. Donec vestibulum diam ac eleifend
                dapibus. Maecenas iaculis lobortis lorem, at aliquet diam
                condimentum vitae.
              </p>
            </div>

            <a
              href="/curriculum.pdf"
              title="Download my CV / Curriculum"
              className="common-button"
              target="_blank"
            >
              Download my CV / Curriculum
            </a>
          </section>
        </Container>
      </Layout>
    )
  }
}
