import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CanvasArea from 'components/CanvasArea'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const HeaderContainer = styled.div`
  margin: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
`
const Header = styled.h1`
  margin: 0;
  flex: 1;
`
const HeaderInput = styled.input`
  border: none;
  display: block;
  font-weight: inherit;
  width: 100%;
`
const HeaderContainerRight = styled.div`
`
const PropertyInput = styled.input`
  border: none;
  display: block;
  font-weight: inherit;
  text-align: right;
  width: 20em;
`

const StyledCanvasArea = styled(CanvasArea)`
  flex: 1;
`

function CanvasHeader({
  getProperty,
  gridArea, /** ignore */
  header,
  onHeaderChange,
  onPropertyChange,
  sectionProps,
  ...otherProps
}) {
  const handleHeaderChange = useCallback(({ target }) => {
    onHeaderChange({ value: target.value })
  }, [onHeaderChange])

  const handleDateChange = useCallback(({ target }) => {
    onPropertyChange('date', { value: target.value })
  }, [onPropertyChange])
  const handleNameChange = useCallback(({ target }) => {
    onPropertyChange('name', { value: target.value })
  }, [onPropertyChange])

  return (
    <Container
      {...otherProps}
    >
      <HeaderContainer>
        <Header>
          <HeaderInput
            aria-label="Your Business"
            onChange={handleHeaderChange}
            placeholder="Your Business"
            {...header}
          />
        </Header>
        <HeaderContainerRight>
          <PropertyInput
            onChange={handleDateChange}
            {...getProperty('date')}
          />
          <PropertyInput
            onChange={handleNameChange}
            {...getProperty('name')}
          />
        </HeaderContainerRight>
      </HeaderContainer>
      <StyledCanvasArea
        isSimple={true}
        {...sectionProps}
      />
    </Container>
  )
}

CanvasHeader.propTypes = {
  getProperty: PropTypes.func.isRequired,
  gridArea: PropTypes.string,
  header: PropTypes.shape({
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  }).isRequired,
  onHeaderChange: PropTypes.func.isRequired,
  onPropertyChange: PropTypes.func.isRequired,
  sectionProps: PropTypes.object.isRequired,
}

export default CanvasHeader
