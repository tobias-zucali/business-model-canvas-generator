
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import InfoPage from 'components/InfoPage'


function LoadingPage({
  ...otherProps
}) {
  return (
    <InfoPage
      {...otherProps}
    >
      <p>Loading ...</p>
    </InfoPage>
  )
}


export default LoadingPage
