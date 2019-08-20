import React from 'react'

const ContentHeader = props => (
  <header className="common-header">
    <h1 className="common-title">{props.title}</h1>
    <h2 className="common-subtitle">{props.subtitle}</h2>
  </header>
)

export default ContentHeader