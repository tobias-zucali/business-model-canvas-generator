import { createEditorStateFromMarkdown, getMarkdownFromEditorState, updateEditorStateWithMarkdown } from '../index'


it('converts markodwn to contentState and back', () => {
  const md = `\`\`\`js
test
\`\`\`
`

  const mdUpdate = `\`\`\`js
test
\`\`\`

Mit mehr.
`
  const initialEditorState = createEditorStateFromMarkdown(md)

  const codeBlock = initialEditorState.getCurrentContent().getFirstBlock()

  expect(
    codeBlock.getData().get('language')
  ).toBe(
    'js'
  )

  expect(
    getMarkdownFromEditorState(initialEditorState)
  ).toBe(
    md
  )

  const updatedEditorState = updateEditorStateWithMarkdown(initialEditorState, mdUpdate)
  expect(
    getMarkdownFromEditorState(updatedEditorState)
  ).toBe(
    mdUpdate
  )
})
