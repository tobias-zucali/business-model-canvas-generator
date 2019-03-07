import React, { useCallback } from 'react'
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

function Menu({
  onReset,
  onSaveAs,
  ...otherProps
}) {
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
      {/* <button>
        Import from file
      </button> */}
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
}

export default Menu
