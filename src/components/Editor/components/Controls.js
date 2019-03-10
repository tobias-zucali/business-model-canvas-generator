import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { toggleInlineStyle, toggleBlockType } from 'utils/editor'
import styled from 'styled-components'

import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'


const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
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
  const handleToggleInlineStyle = useCallback((inlineStyle) => {
    const toggledEditorState = toggleInlineStyle(editorState, inlineStyle)
    onChange(toggledEditorState)
  }, [onChange, editorState])

  const handleToggleBlockType = useCallback((blockType, data = {}) => {
    const nextEditorState = toggleBlockType(editorState, blockType, data)
    onChange(nextEditorState)
  }, [onChange, editorState])

  return (
    <ControlsContainer
      isVisible={isVisible}
      {...otherProps}
    >
      <InlineStyleControls
        editorState={editorState}
        onToggle={handleToggleInlineStyle}
      />
      <BlockStyleControls
        editorState={editorState}
        onToggle={handleToggleBlockType}
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
