import styled from 'styled-components'
import { Route } from 'react-router-dom'

export const StyledRoute = styled(Route)`
  #nprogress {
    .bar {
      background: var(--primary-color);
    }

    .peg {
      box-shadow: 0 0 10px var(--primary-color), 0 0 5px var(--primary-color);
    }

    .spinner-icon {
      border-top-color: var(--primary-color);
      border-left-color: var(--primary-color);
    }
  }
`
