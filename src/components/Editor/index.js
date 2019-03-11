import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor as DraftJsEditor, RichUtils } from 'draft-js'
import styled, { createGlobalStyle } from 'styled-components'
import useIsFocusWithin from 'hooks/useIsFocusWithin'

import Controls from './components/Controls'
import cardRenderer from './cardRenderer'

import 'draft-js/dist/Draft.css'


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
  }, [onChange])

  const handleKeyCommand = useCallback((command, nextEditorState) => {
    const newState = RichUtils.handleKeyCommand(nextEditorState, command)
    if (newState) {
      onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }, [onChange])

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
        blockRendererFn={cardRenderer}
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

export default Editor
