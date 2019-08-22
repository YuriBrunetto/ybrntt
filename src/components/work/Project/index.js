import React from 'react'
import LazyLoad from 'react-lazyload'

import Placeholder from '../../common/Placeholder'

import { ProjectLink } from './styles'

const Project = ({ item, i }) => (
  <ProjectLink
    href={item.url ? item.url : 'javascript:;'}
    title={item.project}
    className="project"
    target="blank"
  >
    <div className="content">
      <div className="text">
        <div className="common-title">{item.title}</div>
        <div className="stack">&mdash; {item.technologies}</div>
      </div>
    </div>
    <LazyLoad height={400} offset={10} placeholder={<Placeholder />}>
      <img
        src={`https://source.unsplash.com/random/800x450?${i}`}
        alt={item.title}
      />
    </LazyLoad>
  </ProjectLink>
)

export default Project
