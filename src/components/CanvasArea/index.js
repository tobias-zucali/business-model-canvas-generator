import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Editor from 'components/Editor'


const AreaBox = styled.div`
  position: relative;
`

const AreaBorder = styled.div`
  position: absolute;
  background-color: #EEEEEE;
  background-color: ${(props) => props.theme.pageBackground};
`

const BORDER_GAP = '0.5em'
const AreaBorderTop = styled(AreaBorder)`
  height: 1px;
  left: ${BORDER_GAP};
  right: ${BORDER_GAP};
  top: 0;
`
const AreaBorderRight = styled(AreaBorder)`
  bottom: ${BORDER_GAP};
  right: 0;
  top: ${BORDER_GAP};
  width: 1px;
`
const AreaBorderBottom = styled(AreaBorder)`
  bottom: 0;
  height: 1px;
  left: ${BORDER_GAP};
  right: ${BORDER_GAP};
`
const AreaBorderLeft = styled(AreaBorder)`
  bottom: ${BORDER_GAP};
  left: 0;
  top: ${BORDER_GAP};
  width: 1px;
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
  const [
    hasBorderTop,
    hasBorderRight,
    hasBorderBottom,
    hasBorderLeft,
  ] = border

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
      {hasBorderTop && <AreaBorderTop />}
      {hasBorderRight && <AreaBorderRight />}
      {hasBorderBottom && <AreaBorderBottom />}
      {hasBorderLeft && <AreaBorderLeft />}
    </AreaBox>
  )
}

CanvasArea.propTypes = {
  border: PropTypes.arrayOf(PropTypes.bool.isRequired),
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
