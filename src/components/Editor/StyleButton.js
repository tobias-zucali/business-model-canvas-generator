import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledStyleButton = styled(StyleButton)`
  color: ${(props) => props.isActive ? 'inherit' : '#999999'};
  cursor: pointer;
  fill: currentColor;
  padding: 0.25em;
  &:hover, &:focus {
    background: #DDDDDD;
  }
  &:first-child {
    padding-left: 0.4em;
    border-top-left-radius: 0.75em;
    border-bottom-left-radius: 0.75em;
  }
  &:last-child {
    padding-left: 0.4em;
    border-top-right-radius: 0.75em;
    border-bottom-right-radius: 0.75em;
  }
`

function StyleButton({
  Icon,
  isActive,
  label,
  onToggle,
  style,
  ...otherProps
}) {
  const handleClick = (event) => {
    event.preventDefault()
    onToggle(style)
  }
  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      handleClick(event)
    }
  }
  return (
    <Icon
      aria-label={label}
      aria-pressed={isActive}
      onKeyDown={handleKeyDown}
      onMouseDown={handleClick}
      role="button"
      tabIndex="0"
      {...otherProps}
    />
  )
}

StyleButton.propTypes = {
  Icon: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
}


export default StyledStyleButton
