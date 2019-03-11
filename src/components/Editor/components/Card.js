
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { EditorBlock } from 'draft-js'


const SectionElement = styled.section`
  background-color: ${({ color }) => color || '#EEEEEE'};
  padding: 0.5em;
`

function Card({
  blockProps,
  ...otherProps
}) {
  return (
    <SectionElement
      color={blockProps.color}
    >
      <EditorBlock {...otherProps} />
    </SectionElement>
  )
}

Card.propTypes = {
  blockProps: PropTypes.shape({
    color: PropTypes.string,
  }).isRequired,
}

export default Card
