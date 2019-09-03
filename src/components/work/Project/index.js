import React from 'react'
import LazyLoad from 'react-lazyload'

import Placeholder from '../../common/Placeholder'

import { ProjectLink } from './styles'

const Project = ({ item: { title, url, technologies, image }, i }) => (
  <ProjectLink href={url} title={title} className="project" target="blank">
    <div className="text">
      <div className="common-title">{title}</div>
      <div className="stack">&mdash; {technologies}</div>
    </div>
    <LazyLoad height={400}>
      <img src={`/img/projects/${image}`} alt={title} />
    </LazyLoad>
    <Placeholder />
  </ProjectLink>
)

export default Project
