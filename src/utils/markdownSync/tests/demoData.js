
export const markdown = `# Your Business
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
  props: [
    {
      key: 'date',
      value: '2012-12-12',
    },
    {
      key: 'version',
      value: '1',
    },
    {
      key: 'by',
      value: 'My beloved ones',
    },
    {
      key: 'for',
      value: '',
    },
  ],
  sections: [
    {
      key: 'purpose',
      content: '### This is an initial text!\nWith multiline!!!',
      header: 'Purpose',
      placeholder: 'Without a clear purpose, how will we know if a model is good or not?',
    },
    {
      key: 'customer-segments',
      content: '',
      header: 'Customer Segments',
      placeholder: 'To build an effective business model, a company must identify which customers it tries to serve.',
    },
    {
      key: 'value-propositions',
      content: '',
      header: 'Value Propositions',
      placeholder: 'The collection of products and services a business offers to meet the needs of its customers.',
    },
  ],
}
