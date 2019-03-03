import React, { useState } from 'react'
import once from 'lodash/once'
import Editor, { createEditorStateFromMarkdown, getMarkdownFromEditorState } from '../Editor'


const getDefaultEditorState = once(() => {
  const defaultValue = `# hey!
das ist doch was!`

  return createEditorStateFromMarkdown(defaultValue)
})

function App() {
  const [editorState, setEditorState] = useState(getDefaultEditorState())

  console.log(getMarkdownFromEditorState(editorState))

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
    />
  )
}

export default App
