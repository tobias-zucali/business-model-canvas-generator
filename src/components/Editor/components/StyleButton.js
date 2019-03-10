import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Button = styled.button`
  background: ${({ 'aria-pressed': ariaPressed }) => ariaPressed ? '#DDDDDD' : 'transparent'};;
  border: none;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  opacity: ${({ 'aria-pressed': ariaPressed }) => ariaPressed ? 1 : 0.5};
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
  icon,
  isActive,
  label,
  onToggle,
  style,
  data,
  ...otherProps
}) {
  const handleClick = (event) => {
    event.preventDefault()
    onToggle(style, data)
  }
  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      handleClick(event)
    }
  }
  return (
    <Button
      aria-label={label}
      aria-pressed={isActive}
      onKeyDown={handleKeyDown}
      onMouseDown={handleClick}
      tabIndex="0"
      {...otherProps}
    >
      {icon || label}
    </Button>
  )
}

StyleButton.propTypes = {
  data: PropTypes.object,
  icon: PropTypes.node,
  isActive: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
}


export default StyleButton
