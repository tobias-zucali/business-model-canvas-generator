import React from 'react'
import PropTypes from 'prop-types'

import StyleButton from './StyleButton'
import { SIMPLE_INLINE_STYLES } from './constants'


function InlineStyleControls({
  editorState,
  onToggle,
}) {
  const currentStyle = editorState.getCurrentInlineStyle()

  return (
    <div className="RichEditor-controls">
      {SIMPLE_INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

InlineStyleControls.propTypes = {
  editorState: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default InlineStyleControls
