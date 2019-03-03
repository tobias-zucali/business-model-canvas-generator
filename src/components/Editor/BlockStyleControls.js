import React from 'react'
import PropTypes from 'prop-types'

import StyleButton from './StyleButton'
import { SIMPLE_BLOCK_TYPES } from './constants'


function BlockStyleControls({
  editorState,
  onToggle,
}) {
  const selection = editorState.getSelection()
  const blockType = editorState.getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <div className="RichEditor-controls">
      {SIMPLE_BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

BlockStyleControls.propTypes = {
  editorState: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default BlockStyleControls
