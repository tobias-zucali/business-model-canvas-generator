import modelToMarkdown from '../modelToMarkdown'

import { markdown, model } from './demoData'


describe('utils/useMarkdownSync/modelToMarkdown', () => {
  expect(
    modelToMarkdown(model)
  ).toEqual(
    markdown
  )
})
