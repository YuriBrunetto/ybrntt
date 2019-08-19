import { createGlobalStyle } from 'styled-components'
import { resetCss } from './utils/reset.css'

const GlobalStyle = createGlobalStyle`
  ${resetCss}

  body, input, textarea, button {
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    -webkit-font-smoothing: antialiased;

    strong {
      font-weight: bold;
    }
  }
`

export default GlobalStyle
