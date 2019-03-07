import React from 'react'
import PropTypes from 'prop-types'

import StyleButton from './StyleButton'
import ControlsGroup from './ControlsGroup'
import { blockControlTypes } from './controlTypes'


function BlockStyleControls({
  editorState,
  onToggle,
}) {
  const selection = editorState.getSelection()
  const blockType = editorState.getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <ControlsGroup>
      {blockControlTypes.map((controlType) => (
        <StyleButton
          isActive={controlType.style === blockType}
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
