import React from 'react'
import LazyLoad from 'react-lazyload'

import Placeholder from '../../common/Placeholder'

import { ProjectLink } from './styles'

const Project = ({ i }) => (
  <ProjectLink href="#" title="Project name" className="project" target="blank">
    <div className="content">
      <div className="text">
        <div className="common-title">SAT-7 Pars</div>
        <div className="stack">&mdash; React (Next.js), SCSS</div>
      </div>
    </div>
    <LazyLoad height={400} offset={10} placeholder={<Placeholder />}>
      <img
        src={`https://source.unsplash.com/random/800x450?${i}`}
        alt="SAT-7 Pars"
      />
    </LazyLoad>
  </ProjectLink>
)

export default Project
