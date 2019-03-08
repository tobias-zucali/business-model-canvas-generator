import modelToMarkdown from '../modelToMarkdown'

import { markdown, model } from './demoData'


describe('utils/getMarkdownSyncApi/modelToMarkdown', () => {
  it('converts a model to markdown', () => {
    expect(
      modelToMarkdown(model)
    ).toEqual(
      markdown
    )
  })
})
