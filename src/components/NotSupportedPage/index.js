
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import InfoPage from 'components/InfoPage'


function NotSupportedPage({
  ...otherProps
}) {
  return (
    <InfoPage
      {...otherProps}
    >
      <h1>Sorry,</h1>
      <p>your browser does not provide the features needed for this application. Please switch to a current version of a modern browser.</p>
    </InfoPage>
  )
}


export default NotSupportedPage
