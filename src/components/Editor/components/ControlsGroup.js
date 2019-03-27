import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StyleButton from './StyleButton'


const Container = styled.div`
  background: #EEEEEE;
  border-radius: 0.75em;
  display: flex;
  margin-right: 0.5em;
  margin-top: 0.25em;
`

function BlockStyleControls({
  controlTypes,
  getIsActive,
  onToggle,
}) {
  return (
    <Container>
      {controlTypes.map((controlType) => (
        <StyleButton
          isActive={getIsActive(controlType)}
          key={controlType.label}
          onToggle={onToggle}
          {...controlType}
        />
      ))}
    </Container>
  )
}

BlockStyleControls.propTypes = {
  controlTypes: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired),
  getIsActive: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default BlockStyleControls
