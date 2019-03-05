import splitMarkdown, { findHeader, findProps, findSections, findPlaceholderText } from '../index'


const testContent = `
# Your Business
date: 2012-12-12
version: 1
by: My beloved ones
for: 

## Purpose {purpose}
[Without a clear purpose, how will we know if a model is good or not?]

### This is an initial text!
With multiline!!!

## Customer Segments {customer-segments}
[To build an effective business model, a company must identify which customers it tries to serve.]

## Value Propositions {value-propositions}
[The collection of products and services a business offers to meet the needs of its customers.]
`

describe('utils/splitMarkdown', () => {
  it('splits markdown', () => {
    expect(
      splitMarkdown(testContent)
    ).toEqual(
      {
        header: 'Your Business',
        props: {
          by: 'My beloved ones',
          date: '2012-12-12',
          for: '',
          version: '1',
        },
        sections: {
          'customer-segments': {
            content: '',
            header: 'Customer Segments',
            placeholder: 'To build an effective business model, a company must identify which customers it tries to serve.',
          },
          purpose: {
            content: '### This is an initial text!\nWith multiline!!!',
            header: 'Purpose',
            placeholder: 'Without a clear purpose, how will we know if a model is good or not?',
          },
          'value-propositions': {
            content: '',
            header: 'Value Propositions',
            placeholder: 'The collection of products and services a business offers to meet the needs of its customers.',
          },
        },
      }
    )
  })

  describe('findHeader', () => {
    it('finds the header in the frist line', () => {
      expect(
        findHeader(['# oh my header!'])
      ).toEqual(
        {
          header: 'oh my header!',
          index: 0,
        }
      )
    })

    it('trims white space', () => {
      expect(
        findHeader(['#   oh my header!    '])
      ).toEqual(
        {
          header: 'oh my header!',
          index: 0,
        }
      )
    })

    it('finds the header in another line', () => {
      expect(
        findHeader(['', '', '# oh my header!', '## ignore this please!'])
      ).toEqual(
        {
          header: 'oh my header!',
          index: 2,
        }
      )
    })

    it('returns index -1 if no header is found', () => {
      expect(
        findHeader(['', ''])
      ).toEqual(
        {
          header: '',
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
          props: {
            color: 'red',
            severity: 'hell',
          },
          lastIndex: 1,
        }
      )
    })

    it('trims white space', () => {
      expect(
        findProps(['  color  :   red   ', '  severity:    hell   '], 0)
      ).toEqual(
        {
          props: {
            color: 'red',
            severity: 'hell',
          },
          lastIndex: 1,
        }
      )
    })

    it('ignores invalid lines', () => {
      expect(
        findProps(['', 'color: red', 'ignore me!', 'severity: hell', ''], 0)
      ).toEqual(
        {
          props: {
            color: 'red',
            severity: 'hell',
          },
          lastIndex: 4,
        }
      )
    })

    it('stops at the next heading', () => {
      expect(
        findProps(['color: red', '# header', 'severity: hell'], 0)
      ).toEqual(
        {
          props: {
            color: 'red',
          },
          lastIndex: 0,
        }
      )

      expect(
        findProps(['color: red', '## header', 'severity: hell'], 0)
      ).toEqual(
        {
          props: {
            color: 'red',
          },
          lastIndex: 0,
        }
      )

      expect(
        findProps(['color: red', '    ##    header #', 'severity: hell'], 0)
      ).toEqual(
        {
          props: {
            color: 'red',
          },
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
          sections: {
            hey: {
              header: 'Hey there!',
              placeholder: '',
              content: 'relatively empty',
            },
            another: {
              header: 'And another one',
              placeholder: 'with placeholder',
              content: `Here is some content text!

And some more

# with headings
__and so on__`,
            },
          },
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

    it('ignores trailing text', () => {
      expect(
        findPlaceholderText(['ignore me! [Hey there!] ignore me!'], 0)
      ).toEqual(
        {
          placeholder: 'Hey there!',
          index: 0,
        }
      )
    })
  })
})
