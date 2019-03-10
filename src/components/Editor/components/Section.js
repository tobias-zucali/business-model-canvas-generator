
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { EditorBlock } from 'draft-js'


const SectionElement = styled.section`
  background-color: ${({ color }) => color || '#EEEEEE'};
  padding: 0.5em;
`

function Section(props) {
  const {
    block,
    blockProps: {
      languageColorMap,
    },
  } = props
  const data = block.getData()

  return (
    <SectionElement
      color={languageColorMap[data.get('language')]}
    >
      <EditorBlock {...props} />
    </SectionElement>
  )
}

Section.propTypes = {
  block: PropTypes.object.isRequired,
  blockProps: PropTypes.shape({
    languageColorMap: PropTypes.object.isRequired,
  }).isRequired,
}

export default Section
