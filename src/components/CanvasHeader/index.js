import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CanvasArea from 'components/CanvasArea'


const Header = styled.h1`
  margin: 0.5rem 0.5rem 0 0.5rem;
`
const HeaderInput = styled.input`
  border: none;
  font-weight: inherit;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledCanvasArea = styled(CanvasArea)`
  flex: 1;
`

function CanvasHeader({
  gridArea,
  header,
  onHeaderChange,
  onPropertyChange,
  props,
  sectionProps,
  ...otherProps
}) {
  const handleHeaderChange = useCallback(({ target }) => {
    onHeaderChange(target.value)
  }, [onHeaderChange])

  return (
    <HeaderContainer
      {...otherProps}
    >
      <Header>
        <HeaderInput
          onChange={handleHeaderChange}
          value={header}
        />
      </Header>
      <StyledCanvasArea
        isSimple={true}
        {...sectionProps}
      />
    </HeaderContainer>
  )
}

CanvasHeader.propTypes = {
  gridArea: PropTypes.string,
  header: PropTypes.string.isRequired,
  onHeaderChange: PropTypes.func.isRequired,
  onPropertyChange: PropTypes.func.isRequired,
  props: PropTypes.array.isRequired,
  sectionProps: PropTypes.object.isRequired,
}

export default CanvasHeader
