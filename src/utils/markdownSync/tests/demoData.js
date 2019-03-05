
export const markdown = `
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

export const model = {
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
