import React from 'react'
import PropTypes from 'prop-types'
import { RichUtils } from 'draft-js'
import styled from 'styled-components'

import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'


const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
  z-index: 2;

  @media print {
    display: none;
  }
`

export function Controls({
  editorState,
  isVisible,
  onChange,
  ...otherProps
}) {
  const toggleInlineStyle = (inlineStyle) => {
    onChange(
      RichUtils.toggleInlineStyle(
        editorState,
        inlineStyle
      )
    )
  }
  const toggleBlockType = (blockType) => {
    onChange(
      RichUtils.toggleBlockType(
        editorState,
        blockType
      )
    )
  }

  return (
    <ControlsContainer
      isVisible={isVisible}
      {...otherProps}
    >
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
    </ControlsContainer>
  )
}

Controls.propTypes = {
  editorState: PropTypes.object.isRequired,
  isVisible: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Controls
