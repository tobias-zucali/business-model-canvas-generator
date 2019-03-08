import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useFullscreen from 'hooks/useFullscreen'
import { push } from 'hooks/useSimpleRouter'


const Container = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
  padding: 0 0.5em;
  text-align: right;

  @media print {
    display: none;
  }
`

const HiddenForm = styled.form`
  display: block;
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`
const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  line-height: inherit;
  margin-top: -0.5em;
  margin-right: 1px;
  padding: 0.5em 1em;
  position: relative;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background: #DDDDDD;
    outline: none;
  }
  &:last-child {
    margin-right: -0.5em;
  }
  &:not(:last-child)::after {
    background: currentColor;
    bottom: 0.6em;
    content: '';
    position: absolute;
    right: -1px;
    top: 0.6em;
    width: 1px;
  }
`

function Menu({
  loadFromFile,
  onReset,
  onSaveAs,
  ...otherProps
}) {
  const importFormRef = useRef()
  const importInputRef = useRef()
  const handleReset = useCallback(() => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure to reject all your changes?')) {
      onReset()
    }
  }, [onReset])
  const handleHelp = useCallback(() => {
    push('/')
  }, [])

  const {
    isFullscreen,
    toggleFullscreen,
  } = useFullscreen()

  return (
    <Container
      {...otherProps}
    >
      <MenuButton
        onClick={toggleFullscreen}
      >
        {isFullscreen ? 'Exit full screen' : 'full screen'}
      </MenuButton>
      <MenuButton
        onClick={onSaveAs}
      >
        Save to file
      </MenuButton>
      <MenuButton
        onClick={() => importInputRef.current.click()}
      >
        Import from file
        <HiddenForm
          ref={importFormRef}
        >
          <input
            accept="text/plain, text/markdown"
            aria-hidden={true}
            tabIndex="-1"
            type="file"
            onChange={({ target }) => {
              loadFromFile(target.files[0])

              // clear value to allow to import from same path again
              importFormRef.current.reset()
            }}
            ref={importInputRef}
          />
        </HiddenForm>
      </MenuButton>
      <MenuButton
        onClick={handleReset}
      >
        Create new canvas
      </MenuButton>
      <MenuButton
        onClick={window.print}
      >
        Print
      </MenuButton>
      <MenuButton
        aria-label="Help"
        onClick={handleHelp}
      >
        ?
      </MenuButton>
    </Container>
  )
}

Menu.propTypes = {
  onReset: PropTypes.func.isRequired,
  onSaveAs: PropTypes.func.isRequired,
  loadFromFile: PropTypes.func.isRequired,
}

export default Menu
