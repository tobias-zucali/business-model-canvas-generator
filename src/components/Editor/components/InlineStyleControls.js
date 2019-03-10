import React from 'react'
import PropTypes from 'prop-types'

import StyleButton from './StyleButton'
import ControlsGroup from './ControlsGroup'
import { inlineControlTypes } from '../controlTypes'


function InlineStyleControls({
  editorState,
  onToggle,
}) {
  const currentStyle = editorState.getCurrentInlineStyle()

  return (
    <ControlsGroup>
      {inlineControlTypes.map((controlType) => (
        <StyleButton
          isActive={currentStyle.has(controlType.style)}
          key={controlType.label}
          onToggle={onToggle}
          {...controlType}
        />
      ))}
    </ControlsGroup>
  )
}

InlineStyleControls.propTypes = {
  editorState: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default InlineStyleControls
