import getMarkdownSyncApi from '../index'

import { model } from './demoData'


describe('utils/getMarkdownSyncApi', () => {
  const sectionKeys = [
    'purpose',
    'customer-segments',
    'value-propositions',
  ]
  const someSectionKey = 'customer-segments'
  const someSection = model.sections[1]

  const propertyKeys = [
    'date',
    'version',
    'by',
    'for',
  ]
  const somePropertyKey = 'version'
  const someProperty = model.props[1]

  it('returns api', () => {
    const onModelChange = jest.fn()
    const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })
    expect(
      markdownSyncApi
    ).toEqual(
      expect.any(Object)
    )
  })

  describe('sections', () => {
    it('provides section keys', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })
      expect(
        markdownSyncApi.SECTION_KEYS
      ).toEqual(
        sectionKeys
      )
    })

    it('provides all sections', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })
      expect(
        markdownSyncApi.sections
      ).toEqual(
        model.sections
      )
    })

    it('provides index of specific section', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        markdownSyncApi.getSectionIndex(someSectionKey)
      ).toEqual(
        1
      )
    })

    it('provides specific section', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        markdownSyncApi.getSection(someSectionKey)
      ).toEqual(
        someSection
      )
    })

    it('updates section', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      const sectionUpdate = { content: 'some new content' }

      markdownSyncApi.updateSection(someSectionKey, sectionUpdate)
      expect(
        markdownSyncApi.getSection(someSectionKey)
      ).toEqual({
        ...someSection,
        ...sectionUpdate,
      })
    })

    it('throws an error if update is no object', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        () => markdownSyncApi.updateProperty(someSectionKey, 'My new section!')
      ).toThrow(
        /invalid arguments/i
      )
    })

    it('throws an error if key is not found', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        () => markdownSyncApi.updateSection('hugo', someSection)
      ).toThrow(
        /not available/i
      )
    })
  })

  describe('header', () => {
    it('provides header', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })
      expect(
        markdownSyncApi.header
      ).toEqual(
        {
          placeholder: 'Header',
          value: 'Your Business',
        }
      )
    })

    it('updates header', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })
      markdownSyncApi.updateHeader({
        value: 'My new head!',
      })

      expect(
        markdownSyncApi.header
      ).toEqual({
        placeholder: 'Header',
        value: 'My new head!',
      })
    })

    it('throws an error if update is no object', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        () => markdownSyncApi.updateHeader('My new head!')
      ).toThrow(
        /invalid arguments/i
      )
    })
  })

  describe('properties', () => {
    it('provides property keys', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })
      expect(
        markdownSyncApi.PROP_KEYS
      ).toEqual(
        propertyKeys
      )
    })

    it('provides all props', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })
      expect(
        markdownSyncApi.props
      ).toEqual(
        model.props
      )
    })

    it('provides index of specific section', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        markdownSyncApi.getPropertyIndex(somePropertyKey)
      ).toEqual(
        1
      )
    })

    it('provides specific property', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        markdownSyncApi.getProperty(somePropertyKey)
      ).toEqual(
        someProperty
      )
    })

    it('updates property', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      const propertyUpdate = { content: 'some new content' }

      markdownSyncApi.updateProperty(somePropertyKey, propertyUpdate)
      expect(
        markdownSyncApi.getProperty(somePropertyKey)
      ).toEqual({
        ...someProperty,
        ...propertyUpdate,
      })
    })

    it('throws an error if update is no object', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        () => markdownSyncApi.updateProperty(somePropertyKey, 'My new property!')
      ).toThrow(
        /invalid arguments/i
      )
    })

    it('throws an error if key is not found', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      expect(
        () => markdownSyncApi.updateProperty('hugo', someProperty)
      ).toThrow(
        /not available/i
      )
    })
  })

  describe('reset', () => {
    it('resets the model', () => {
      const onModelChange = jest.fn()
      const markdownSyncApi = getMarkdownSyncApi({ model, onModelChange })

      markdownSyncApi.updateHeader({
        placeholder: 'Dolly',
        value: 'Hugo',
      })
      markdownSyncApi.updateSection(someSectionKey, { content: 'hugo' })
      markdownSyncApi.updateProperty(somePropertyKey, { value: 'hugo' })

      markdownSyncApi.reset()

      expect(
        markdownSyncApi.header
      ).toEqual({
        placeholder: 'Header',
        value: 'Your Business',
      })
      expect(
        markdownSyncApi.getProperty(somePropertyKey)
      ).toEqual(
        someProperty
      )
      expect(
        markdownSyncApi.getSection(someSectionKey)
      ).toEqual(
        someSection
      )
    })
  })
})
