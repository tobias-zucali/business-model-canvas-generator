import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import BusinessModelCanvas from 'components/BusinessModelCanvas'


const GlobalStyle = createGlobalStyle`
  BODY {
    background-color: ${(props) => props.theme.pageBackground};
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
