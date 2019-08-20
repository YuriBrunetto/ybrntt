import React from 'react'

import { Link } from './styles'

const Button = ({ href, title }) => (
  <Link href={href} title={title} className="common-button" target="_blank">
    {title}
  </Link>
)

export default Button
