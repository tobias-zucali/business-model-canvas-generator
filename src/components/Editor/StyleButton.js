import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UnstyledButton from '../UnstyledButton'


const DefaultStyleButton = styled(UnstyledButton)`
  border-radius: 0.2em;
  color: #999999;
  cursor: pointer;
  padding: 0.5em;
  &:hover, &:focus {
    background: #EEEEEE;
  }
`
const ActiveStyleButton = styled(DefaultStyleButton)`
  color: #000000;
`


function StyleButton({
  active,
  label,
  onToggle,
  style,
}) {
  const ButtonComponent = active ? ActiveStyleButton : DefaultStyleButton
  return (
    <ButtonComponent
      onMouseDown={(e) => {
        e.preventDefault()
        onToggle(style)
      }}
    >
      {label}
    </ButtonComponent>
  )
}

StyleButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
}


export default StyleButton
