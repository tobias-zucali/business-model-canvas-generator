import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor as DraftJsEditor, EditorState, RichUtils } from 'draft-js'
import { stateFromMarkdown } from 'draft-js-import-markdown'
import { stateToMarkdown } from 'draft-js-export-markdown'

import memoize from 'lodash/memoize'

import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'

import 'draft-js/dist/Draft.css'


export function Editor({
  onChange,
  editorState,
  ...otherProps
}) {
  const editorRef = useRef(null)

  const handleChange = useCallback((nextEditorState) => {
    onChange(nextEditorState)
  }, [])

  const handleKeyCommand = useCallback((command, nextEditorState) => {
    const newState = RichUtils.handleKeyCommand(nextEditorState, command)
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }, [])

  const handleEditorClick = () => {
    editorRef.current.focus()
  }

  const toggleBlockType = (blockType) => {
    handleChange(
      RichUtils.toggleBlockType(
        editorState,
        blockType
      )
    )
  }
  const toggleInlineStyle = (inlineStyle) => {
    handleChange(
      RichUtils.toggleInlineStyle(
        editorState,
        inlineStyle
      )
    )
  }

  return (
    <React.Fragment>
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        onClick={handleEditorClick}
      >
        <DraftJsEditor
          {...otherProps}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={handleChange}
          ref={editorRef}
        />
      </div>
    </React.Fragment>
  )
}

Editor.propTypes = {
  editorState: PropTypes.object,
  onChange: PropTypes.func,
}


Editor.createEditorStateFromMarkdown = memoize((md) => EditorState.createWithContent(
  stateFromMarkdown(md)
))

Editor.getMarkdownFromEditorState = (editorState) => stateToMarkdown(
  editorState.getCurrentContent()
)

export default Editor
