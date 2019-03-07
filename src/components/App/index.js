import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import BusinessModelCanvas from 'components/BusinessModelCanvas'


const GlobalStyle = createGlobalStyle`
  BODY {
    background-color: ${({ theme }) => theme.pageBackground};
    font-size: 14px;

    @media (min-width: 1600px) {
      font-size: 16px;
    }
    @media (min-width: 2000px) {
      font-size: 18px;
    }
  }
`

function App() {
  return (
    <ThemeProvider
      theme={{
        pageBackground: '#EEEEEE',
        paperBackground: '#FFFFFF',
      }}
    >
      <React.Fragment>
        <GlobalStyle />
        <BusinessModelCanvas />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
