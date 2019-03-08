import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  width: 100%;
`
const Box = styled.div`
  background-color: ${({ theme }) => theme.paperBackground};
  margin: 1em 1em 3em 1em;
  max-width: calc(100% - 2em);
  padding: 1em;
  width: 50em;
`

function InfoPage({
  children,
  ...otherProps
}) {
  return (
    <Container
      {...otherProps}
    >
      <Box>
        {children}
      </Box>

    </Container>
  )
}

InfoPage.propTypes = {
  children: PropTypes.node,
}

export default InfoPage
