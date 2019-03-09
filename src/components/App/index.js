import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { supports } from 'utils/environment'

import useSimpleRouter from 'hooks/useSimpleRouter'
import LoadingPage from 'components/LoadingPage'
import NotSupportedPage from 'components/NotSupportedPage'
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
    Component: React.lazy(() => import('components/BusinessModelCanvas')),
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
        {(supports.cssGrid && supports.fileReader && supports.promise) ? (
          <React.Suspense
            fallback={<LoadingPage />}
          >
            <Component />
          </React.Suspense>
        ) : (
          <NotSupportedPage />
        )}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
