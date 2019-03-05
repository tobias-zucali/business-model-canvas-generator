import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Editor from 'components/Editor'


const AreaBox = styled.div`
  border: solid 1px;
`

function CanvasArea({
  content,
  editorState,
  header,
  onChange,
  placeholder,
  ...otherProps
}) {
  return (
    <AreaBox
      {...otherProps}
    >
      <Editor
        editorState={editorState || Editor.createEditorStateFromMarkdown(content)}
        onChange={(nextEditorState) => {
          onChange({
            content: Editor.getMarkdownFromEditorState(nextEditorState),
            editorState: nextEditorState,
          })
        }}
        placeholder={placeholder}
      />
    </AreaBox>
  )
}

CanvasArea.propTypes = {
  content: PropTypes.string.isRequired,
  editorState: PropTypes.object,
  header: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default CanvasArea
