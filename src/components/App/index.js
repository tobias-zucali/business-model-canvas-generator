import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import useSimpleRouter from 'hooks/useSimpleRouter'
import BusinessModelCanvas from 'components/BusinessModelCanvas'
import WelcomePage from 'components/WelcomePage'

import theme from './theme'


const GlobalStyle = createGlobalStyle`
  BODY {
    background-color: ${(props) => props.theme.pageBackground};
    font-size: 14px;

    @media (min-width: 1600px) {
      font-size: 16px;
    }
    @media (min-width: 2000px) {
      font-size: 18px;
    }
  }
`

const routes = [
  {
    url: '/canvas',
    Component: BusinessModelCanvas,
  },
  {
    Component: WelcomePage,
  },
]

function App() {
  const {
    Component,
  } = useSimpleRouter(routes).route

  return (
    <ThemeProvider
      theme={theme}
    >
      <React.Fragment>
        <GlobalStyle />
        <Component />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
