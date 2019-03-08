import splitMarkdown, { findHeader, findProps, findSections, findPlaceholderText } from '../splitMarkdown'

import { markdown } from './demoData'


describe('utils/getMarkdownSyncApi/splitMarkdown', () => {
  it('splits markdown', () => {
    expect(
      splitMarkdown(markdown)
    ).toEqual(
      {
        header: {
          value: 'Your Business',
        },
        props: [
          {
            key: 'date',
            value: '2012-12-12',
          },
          {
            key: 'version',
            value: '0.3',
          },
          {
            key: 'by',
            value: 'My beloved ones',
          },
          {
            key: 'for',
            value: '',
          }],

        sections: [
          {
            content: '### This is an initial text!\nWith multiline!!!',
            header: 'Purpose',
            key: 'purpose',
            placeholder: 'Without a clear purpose, how will we know if a model is good or not?',
          }, {
            content: '',
            header: 'Customer Segments',
            key: 'customer-segments',
            placeholder: 'To build an effective business model, a company must identify which customers it tries to serve.',
          }, {
            content: '',
            header: 'Value Propositions',
            key: 'value-propositions',
            placeholder: 'The collection of products and services a business offers to meet the needs of its customers.',
          },
        ],
      }
    )
  })

  describe('findHeader', () => {
    it('finds the header in the frist line', () => {
      expect(
        findHeader(['# oh my header!'])
      ).toEqual(
        {
          header: {
            value: 'oh my header!',
          },
          index: 0,
        }
      )
    })

    it('trims white space', () => {
      expect(
        findHeader(['#   oh my header!    '])
      ).toEqual(
        {
          header: {
            value: 'oh my header!',
          },
          index: 0,
        }
      )
    })

    it('finds the header in another line', () => {
      expect(
        findHeader(['', '', '# oh my header!', '## ignore this please!'])
      ).toEqual(
        {
          header: {
            value: 'oh my header!',
          },
          index: 2,
        }
      )
    })

    it('returns index -1 if no header is found', () => {
      expect(
        findHeader(['', ''])
      ).toEqual(
        {
          header: {
            value: '',
          },
          index: -1,
        }
      )
    })

    it('only finds first level headlines', () => {
      expect(
        findHeader(['## A second level header'])
      ).toEqual(
        {
          header: {
            value: '',
          },
          index: -1,
        }
      )
    })
  })

  describe('findProps', () => {
    it('finds props', () => {
      expect(
        findProps(['color: red', 'severity: hell'], 0)
      ).toEqual(
        {
          props: [
            {
              key: 'color',
              value: 'red',
            },
            {
              key: 'severity',
              value: 'hell',
            },
          ],
          lastIndex: 1,
        }
      )
    })

    it('trims white space', () => {
      expect(
        findProps(['  color  :   red   ', '  severity:    hell   '], 0)
      ).toEqual(
        {
          props: [
            {
              key: 'color',
              value: 'red',
            },
            {
              key: 'severity',
              value: 'hell',
            },
          ],
          lastIndex: 1,
        }
      )
    })

    it('ignores invalid lines', () => {
      expect(
        findProps(['', 'color: red', 'ignore me!', 'severity: hell', ''], 0)
      ).toEqual(
        {
          props: [
            {
              key: 'color',
              value: 'red',
            },
            {
              key: 'severity',
              value: 'hell',
            },
          ],
          lastIndex: 4,
        }
      )
    })

    it('stops at the next heading', () => {
      expect(
        findProps(['color: red', '# header', 'severity: hell'], 0)
      ).toEqual(
        {
          props: [
            {
              key: 'color',
              value: 'red',
            },
          ],
          lastIndex: 0,
        }
      )

      expect(
        findProps(['color: red', '## header', 'severity: hell'], 0)
      ).toEqual(
        {
          props: [
            {
              key: 'color',
              value: 'red',
            },
          ],
          lastIndex: 0,
        }
      )

      expect(
        findProps(['color: red', '    ##    header #', 'severity: hell'], 0)
      ).toEqual(
        {
          props: [
            {
              key: 'color',
              value: 'red',
            },
          ],
          lastIndex: 0,
        }
      )
    })
  })

  describe('findSections', () => {
    it('finds sections', () => {
      expect(
        findSections(`## Hey there! {hey}
relatively empty

## And another one {another}
[with placeholder]

Here is some content text!

And some more

# with headings
__and so on__
`.split('\n'), 0)
      ).toEqual(
        {
          sections: [
            {
              key: 'hey',
              header: 'Hey there!',
              placeholder: '',
              content: 'relatively empty',
            },
            {
              key: 'another',
              header: 'And another one',
              placeholder: 'with placeholder',
              content: `Here is some content text!

And some more

# with headings
__and so on__`,
            },
          ],
        }
      )
    })
  })

  describe('findPlaceholderText', () => {
    it('finds placeholder text', () => {
      expect(
        findPlaceholderText(['[Hey there!]'], 0)
      ).toEqual(
        {
          placeholder: 'Hey there!',
          index: 0,
        }
      )
    })

    it('ignores trailing empty lines', () => {
      expect(
        findPlaceholderText(['', '   ', '[Hey there!]', 'to be ignored'], 0)
      ).toEqual(
        {
          placeholder: 'Hey there!',
          index: 2,
        }
      )
    })

    it('finds multiline placeholder', () => {
      expect(
        findPlaceholderText(['[Hey there!', '  I wanted to tell you  ', '  this is the end]'], 0)
      ).toEqual(
        {
          placeholder: 'Hey there!\nI wanted to tell you\nthis is the end',
          index: 2,
        }
      )
    })
  })
})
