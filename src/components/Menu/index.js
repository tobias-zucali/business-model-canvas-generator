import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Container = styled.div`
  padding: 0.5em 0.5em 0 0.5em;

  & > button {
    margin-right: 0.25em;
  }

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
  return (
    <Container
      {...otherProps}
    >
      <button
        onClick={onSaveAs}
      >
        Save to file
      </button>
      <button
        onClick={() => importInputRef.current.click()}
      >
        Import from file
      </button>
      <HiddenForm
        ref={importFormRef}
      >
        <input
          accept="text/plain, text/markdown"
          aria-hidden={true}
          type="file"
          onChange={({ target }) => {
            loadFromFile(target.files[0])

            // clear value to allow to import from same path again
            importFormRef.current.reset()
          }}
          ref={importInputRef}
        />
      </HiddenForm>
      <button
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        onClick={window.print}
      >
        Print
      </button>
    </Container>
  )
}

Menu.propTypes = {
  onReset: PropTypes.func.isRequired,
  onSaveAs: PropTypes.func.isRequired,
  loadFromFile: PropTypes.func.isRequired,
}

export default Menu
