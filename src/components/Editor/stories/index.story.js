/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useState } from 'react'
import { storiesOf } from '@storybook/react'
import { createEditorStateFromMarkdown, getMarkdownFromEditorState, updateEditorStateWithMarkdown } from 'utils/editor'

import Editor, {} from '../index'


function EditorWithStateAndMarkdown({
  initialMarkdown = '',
}) {
  const initialEditorState = useMemo(
    () => createEditorStateFromMarkdown(initialMarkdown),
    []
  )
  const [editorState, setEditorState] = useState(initialEditorState)
  const [markdown, setMarkdown] = useState(initialMarkdown)
  const handleChange = useCallback((nextEditorState) => {
    const nextMarkdown = getMarkdownFromEditorState(nextEditorState)
    setMarkdown(nextMarkdown)
    setEditorState(nextEditorState)
  })
  const handleMarkdownChange = useCallback((event) => {
    const { value } = event.target
    const nextEditorState = updateEditorStateWithMarkdown(editorState, value)
    setMarkdown(value)
    setEditorState(nextEditorState)
  })

  return (
    <React.Fragment>
      <Editor
        editorState={editorState}
        isSimple={false}
        onChange={handleChange}
        placeholder="empty"
        style={{ width: '100%', height: '15em', marginBottom: '4em' }}
      />
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        style={{ width: '100%', height: '15em', marginBottom: '4em' }}
      />
    </React.Fragment>
  )
}


storiesOf(
  'Editor',
  module
).add('with text', () => (
  <EditorWithStateAndMarkdown />
))
