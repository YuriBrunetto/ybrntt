import React from 'react'

import { A, LinkStyled } from './styles'

const Button = ({ to, href, title }) => {
  if (to)
    return (
      <LinkStyled to={to} title={title} className="common-button">
        {title}
      </LinkStyled>
    )
  else
    return (
      <A
        href={href}
        title={title}
        className="common-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </A>
    )
}
export default Button
