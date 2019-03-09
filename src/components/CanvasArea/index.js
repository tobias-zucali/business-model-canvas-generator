import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AreaBorder from 'components/AreaBorder'
import Editor from 'components/Editor'


const AreaBox = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  position: relative;
`
const AreaHeader = styled.h2`
  font-size: 1.4em;
  margin: 0 0 0.5rem 0;
`
const HiddenAreaHeader = styled.h2`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  text-indent: -999;
`
const StyledEditor = styled(Editor)`
  flex: 1;
`

function CanvasArea({
  border,
  content,
  editorState,
  header,
  isSimple,
  onChange,
  placeholder,
  ...otherProps
}) {
  return (
    <AreaBox
      {...otherProps}
    >
      {isSimple ? (
        <HiddenAreaHeader>{header}</HiddenAreaHeader>
      ) : (
        <AreaHeader>{header}</AreaHeader>
      )}
      <StyledEditor
        editorState={editorState}
        isSimple={isSimple}
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
  editorState: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  isSimple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

CanvasArea.defaultProps = {
  border: [false, false, false, false],
}

export default CanvasArea
