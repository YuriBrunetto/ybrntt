import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import { Container } from './styles'

const Placeholder = () => (
  <Container>
    <Loader type="Oval" color="#706FD3" height={40} width={40} />
  </Container>
)

export default Placeholder
