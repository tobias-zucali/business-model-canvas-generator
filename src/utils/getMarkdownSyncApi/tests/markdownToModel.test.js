import markdownToModel from '../markdownToModel'

import { markdown, model } from './demoData'


describe('utils/getMarkdownSyncApi/markdownToModel', () => {
  it('converts a model to markdown', () => {
    expect(
      markdownToModel(model, markdown)
    ).toEqual(
      model
    )
  })
})
