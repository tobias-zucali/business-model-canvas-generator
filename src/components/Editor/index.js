import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor as DraftJsEditor, EditorState, RichUtils } from 'draft-js'
import { stateFromMarkdown } from 'draft-js-import-markdown'
import { stateToMarkdown } from 'draft-js-export-markdown'
import styled, { createGlobalStyle } from 'styled-components'
import useIsFocusWithin from 'hooks/useIsFocusWithin'

import memoize from 'lodash/memoize'

import 'draft-js/dist/Draft.css'
import Controls from './Controls'


const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const GlobalDraftJsEditorStyle = createGlobalStyle`
  .DraftEditor-root {
    flex: 1;
  }
  .public-DraftEditorPlaceholder-inner {
    @media print {
      display: none;
    }
  }
`

export function Editor({
  editorState,
  isSimple,
  onChange,
  placeholder,
  ...otherProps
}) {
  const editorRef = useRef(null)
  const containerRef = useRef(null)
  const isFocusWithin = useIsFocusWithin(containerRef)

  const handleChange = useCallback((nextEditorState) => {
    onChange(nextEditorState)
  }, [])

  const handleKeyCommand = useCallback((command, nextEditorState) => {
    const newState = RichUtils.handleKeyCommand(nextEditorState, command)
    if (newState) {
      onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }, [])

  const handleEditorClick = () => {
    editorRef.current.focus()
  }

  return (
    <EditorContainer // eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
      onClick={handleEditorClick}
      ref={containerRef}
      {...otherProps}
    >
      <GlobalDraftJsEditorStyle />
      <DraftJsEditor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={handleChange}
        placeholder={placeholder}
        ref={editorRef}
      />
      {!isSimple && (
        <Controls
          editorState={editorState}
          isVisible={isFocusWithin}
          onChange={handleChange}
        />
      )}
    </EditorContainer>
  )
}

Editor.propTypes = {
  editorState: PropTypes.object.isRequired,
  isSimple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}


Editor.createEditorStateFromMarkdown = memoize((md) => EditorState.createWithContent(
  stateFromMarkdown(md)
))

Editor.getMarkdownFromEditorState = (editorState) => stateToMarkdown(
  editorState.getCurrentContent()
)

export default Editor
