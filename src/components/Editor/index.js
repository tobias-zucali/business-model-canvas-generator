import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types'
import { Editor as DraftJsEditor, EditorState, RichUtils } from 'draft-js';
import { stateFromMarkdown } from 'draft-js-import-markdown';
import { stateToMarkdown } from "draft-js-export-markdown";
import styled from 'styled-components'


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


class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}
const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];
const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];
const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};


export function Editor({
  onChange,
  editorState,
}) {
  const editorRef = useRef(null);

  const handleChange = useCallback((editorState) => {
    onChange(editorState)
  }, []);

  const handleKeyCommand = useCallback((command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
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
    );
  }
  const toggleInlineStyle = (inlineStyle) => {
    handleChange(
      RichUtils.toggleInlineStyle(
        editorState,
        inlineStyle
      )
    );
  }

  return (
    <EditorWrapper
    >
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div
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

export default Editor;
