import React from 'react'

import { Container } from './styles'

const Footer = () => (
  <Container>
    &copy; {new Date().getFullYear()} Yuri Brunetto &mdash; All rights reserved
  </Container>
)

export default Footer
