import React from 'react'
import PropTypes from 'prop-types'
import { getSelectedBlock, hasBlockData, hasBlockType } from 'utils/editor'

import StyleButton from './StyleButton'
import ControlsGroup from './ControlsGroup'
import { blockControlTypes } from '../controlTypes'


function BlockStyleControls({
  editorState,
  onToggle,
}) {
  const selectedBlock = getSelectedBlock(editorState)

  return (
    <ControlsGroup>
      {blockControlTypes.map((controlType) => (
        <StyleButton
          isActive={
            hasBlockType(selectedBlock, controlType.style)
            && hasBlockData(selectedBlock, controlType.data || {})
          }
          key={controlType.label}
          onToggle={onToggle}
          {...controlType}
        />
      ))}
    </ControlsGroup>
  )
}

BlockStyleControls.propTypes = {
  editorState: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default BlockStyleControls
