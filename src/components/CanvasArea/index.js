import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AreaBorder from 'components/AreaBorder'
import Editor from 'components/Editor'


const AreaBox = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.5em;
  position: relative;
`
const AreaHeader = styled.h2`
  font-size: 1.4em;
  margin: 0 0 0.5em 0;
`

const StyledEditor = styled(Editor)`
  flex: 1;
`

function CanvasArea({
  border,
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
      <AreaHeader>
        {header}
      </AreaHeader>
      <StyledEditor
        editorState={editorState || Editor.createEditorStateFromMarkdown(content)}
        onChange={(nextEditorState) => {
          onChange({
            content: Editor.getMarkdownFromEditorState(nextEditorState),
            editorState: nextEditorState,
          })
        }}
        placeholder={placeholder}
      />
      <AreaBorder {...border} />
    </AreaBox>
  )
}

CanvasArea.propTypes = {
  border: PropTypes.object,
  content: PropTypes.string.isRequired,
  editorState: PropTypes.object,
  header: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

CanvasArea.defaultProps = {
  border: [false, false, false, false],
}

export default CanvasArea
