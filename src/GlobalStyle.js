import { createGlobalStyle } from 'styled-components'
import { resetCss } from './utils/reset.css'

const GlobalStyle = createGlobalStyle`
  ${resetCss}

  :root {
    --primary-color: #706FD3;
    --dark-color: #111;
  }

  ::selection {
    background: var(--primary-color);
    color: #fff;
  }

  * {
    outline: 0;
  }

  body, input, textarea, button {
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: var(--dark-color);
    color: #fff;
    -webkit-font-smoothing: antialiased;

    strong {
      font-weight: bold;
    }
  }

  em {
    font-style: italic;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    margin-bottom: auto;
    min-height: 400px;
  }

  .common-limiter {
    margin: 0 auto;
    max-width: 960px;
    width: 100%;

    @media (max-width: 959px) {
      padding: 0 24px;
    }
  }

  .common-title {
    font-size: 52px;
    font-weight: bold;
    line-height: 120%;
    margin: 0;
  }

  .common-subtitle {
    color: rgba(255,255,255,.7);
    font-size: 24px;
    font-weight: 300;
    margin-top: 16px;
  }

  .common-text {
    color: rgba(255,255,255,.7);
    font-size: 20px;
    font-weight: 300;
    line-height: 180%;
    max-width: 84%;
  }
`

export default GlobalStyle
