import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor as DraftJsEditor, EditorState, RichUtils } from 'draft-js'
import { stateFromMarkdown } from 'draft-js-import-markdown'
import { stateToMarkdown } from 'draft-js-export-markdown'
import styled from 'styled-components'

import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'


const EditorWrapper = styled.div`
  border: solid 1px;
`
export function createEditorStateFromMarkdown(md) {
  const contentState = stateFromMarkdown(md)
  return EditorState.createWithContent(contentState)
}

export function getMarkdownFromEditorState(editorState) {
  return stateToMarkdown(
    editorState.getCurrentContent()
  )
}


export function Editor({
  onChange,
  editorState,
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
    <EditorWrapper>
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
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={handleChange}
          ref={editorRef}
        />
      </div>
    </EditorWrapper>
  )
}

Editor.propTypes = {
  editorState: PropTypes.object,
  onChange: PropTypes.func,
}

export default Editor
