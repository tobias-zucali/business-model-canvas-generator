import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { getSelectedBlock, hasBlockData, hasBlockType, toggleInlineStyle, toggleBlockType } from 'utils/editor'
import styled from 'styled-components'

import ControlsGroup from './ControlsGroup'
import { inlineControlTypes, blockControlTypes } from '../controlTypes'


const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${({ isVisible }) => isVisible ? undefined : 0};
  overflow: hidden;
  z-index: 2;

  @media print {
    display: none;
  }
`


export function Controls({
  cardControlTypes,
  editorState,
  isVisible,
  onChange,
  ...otherProps
}) {
  const handleToggleInlineStyle = useCallback(
    (inlineStyle) => {
      const toggledEditorState = toggleInlineStyle(editorState, inlineStyle)
      onChange(toggledEditorState)
    },
    [onChange, editorState]
  )

  const handleToggleBlockType = useCallback(
    (blockType, data = {}) => {
      const nextEditorState = toggleBlockType(editorState, blockType, data)
      onChange(nextEditorState)
    },
    [onChange, editorState]
  )

  const selectedBlock = getSelectedBlock(editorState)
  const getIsActiveBlock = useCallback(
    (controlType) => hasBlockType(selectedBlock, controlType.type)
      && hasBlockData(selectedBlock, controlType.data || {}),
    [selectedBlock]
  )

  const currentStyle = editorState.getCurrentInlineStyle()
  const getIsActiveStyle = useCallback(
    (controlType) => currentStyle.has(controlType.type),
    [currentStyle]
  )

  return (
    <ControlsContainer
      isVisible={isVisible}
      {...otherProps}
    >
      <ControlsGroup
        controlTypes={inlineControlTypes}
        editorState={editorState}
        getIsActive={getIsActiveStyle}
        onToggle={handleToggleInlineStyle}
      />
      <ControlsGroup
        controlTypes={blockControlTypes}
        editorState={editorState}
        getIsActive={getIsActiveBlock}
        onToggle={handleToggleBlockType}
      />
      {cardControlTypes.length > 0 && (
        <ControlsGroup
          controlTypes={cardControlTypes}
          editorState={editorState}
          getIsActive={getIsActiveBlock}
          onToggle={handleToggleBlockType}
        />
      )}
    </ControlsContainer>
  )
}

Controls.propTypes = {
  cardControlTypes: PropTypes.array,
  editorState: PropTypes.object.isRequired,
  isVisible: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Controls
