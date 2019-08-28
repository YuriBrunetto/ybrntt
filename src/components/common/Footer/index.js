import React from 'react'

import { Container } from './styles'

const Footer = () => (
  <Container>
    &copy; {new Date().getFullYear()} Made with ❤️ by Yuri Brunetto
  </Container>
)

export default Footer
