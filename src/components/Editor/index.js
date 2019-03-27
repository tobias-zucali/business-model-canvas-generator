import React, { useCallback, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor as DraftJsEditor, RichUtils } from 'draft-js'
import styled, { createGlobalStyle } from 'styled-components'
import useIsFocusWithin from 'hooks/useIsFocusWithin'
import { getCardType } from './controlTypes'

import Controls from './components/Controls'
import getCardRenderer from './getCardRenderer'

import 'draft-js/dist/Draft.css'


const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const GlobalDraftJsEditorStyle = createGlobalStyle`
  .DraftEditor-root {
    flex: 1;
  }
  .public-DraftEditorPlaceholder-root {
    max-height: 100%;
    overflow: hidden;
    @media print {
      display: none;
    }
  }
`


export function Editor({
  cardStyles,
  editorState,
  isSimple,
  onChange,
  placeholder,
  ...otherProps
}) {
  const editorRef = useRef(null)
  const containerRef = useRef(null)
  const isFocusWithin = useIsFocusWithin(containerRef)

  const cardRenderer = useMemo(
    () => getCardRenderer(cardStyles),
    [cardStyles]
  )

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
          cardControlTypes={cardStyles && cardStyles.map(getCardType)}
          editorState={editorState}
          isVisible={isFocusWithin}
          onChange={handleChange}
        />
      )}
    </EditorContainer>
  )
}

Editor.propTypes = {
  cardStyles: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    key: PropTypes.string,
    label: PropTypes.string.isRequired,
  })),
  editorState: PropTypes.object.isRequired,
  isSimple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

Editor.defaultProps = {
  cardStyles: [
    {
      label: 'Card',
      data: {},
    },
    {
      label: 'Card OK',
      color: 'green',
      key: 'ok',
    },
    {
      label: 'Card Warn',
      color: 'orange',
      key: 'warn',
    },
    {
      label: 'Card Not OK',
      color: 'red',
      key: 'not ok',
    },
  ],
}

export default Editor
