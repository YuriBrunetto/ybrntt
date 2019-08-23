import React from 'react'

import { Container } from './styles'

const ContentHeader = ({ title, subtitle }) => (
  <Container>
    <h1 className="common-title">{title}</h1>
    <h2
      className="common-subtitle"
      dangerouslySetInnerHTML={{ __html: subtitle }}
    />
  </Container>
)

export default ContentHeader
