import modelToMarkdown from '../modelToMarkdown'

import { markdown, model } from './demoData'


describe('utils/useMarkdownSync/modelToMarkdown', () => {
  it('converts a model to markdown', () => {
    expect(
      modelToMarkdown(model)
    ).toEqual(
      markdown
    )
  })
})
