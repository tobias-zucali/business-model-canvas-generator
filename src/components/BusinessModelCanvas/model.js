
export default {
  header: {
    value: '',
    placeholder: 'Your Business',
  },
  localStorageKey: 'businessModelCanvas',
  props: [
    {
      key: 'date',
      placeholder: 'Date',
      value: new Date().toLocaleDateString(),
    },
    {
      key: 'name',
      placeholder: 'Your Name',
      value: '',
    },
  ],
  sections: [
    {
      key: 'purpose',
      border: {
        bottom: true,
      },
      content: '',
      header: 'Purpose',
      isHeader: true,
      placeholder: 'Step 1:\nWhat is the business purpose?\nYou will need it to validate every single part of the model.',
    },
    {
      key: 'customer-segments',
      border: {
        left: true,
      },
      content: '',
      header: 'Customer Segments',
      placeholder: 'Step 2:\nWhich customers does your business try to serve?',
    },
    {
      key: 'value-propositions',
      border: {
        right: true,
        left: true,
      },
      content: '',
      header: 'Value Propositions',
      placeholder: 'Step 3:\nWhich products and services a business offers meet the needs of the customer segments?',
    },
    {
      key: 'channels',
      border: {
        top: true,
      },
      content: '',
      header: 'Channels',
      placeholder: 'Step 4:\nWhich channels does your business use to deliver the value proposition to the customer segments',
    },
    {
      key: 'customer-relationships',
      border: { },
      content: '',
      header: 'Customer Relationships',
      placeholder: 'Step 5:\nWhich type relationship does your business want to create with the customer segments',
    },
    {
      key: 'revenue-streams',
      border: {
        top: true,
      },
      content: '',
      header: 'Revenue Streams',
      placeholder: 'Step 6:\nHow does your company make income from each customer segment?',
    },
    {
      key: 'key-resources',
      border: {
        top: true,
      },
      content: '',
      header: 'Key Resources',
      placeholder: 'Step 7:\nWhich resources are necessary to create the value propositions?',
    },
    {
      key: 'key-activities',
      border: { },
      content: '',
      header: 'Key Activities',
      placeholder: 'Step 8:\nWhat are the most important activities in executing the value propositions?',
    },
    {
      key: 'key-partners',
      border: {
        right: true,
      },
      content: '',
      header: 'Key Partners',
      placeholder: 'Step 9:\nWhich buyer-supplier relationships can help you to focus on your core activity, optimise operations and reduce risks?',
    },
    {
      key: 'cost-structure',
      border: {
        top: true,
        right: true,
      },
      content: '',
      header: 'Cost Structure',
      placeholder: 'Step 10:\nWhat are the most important monetary consequences while operating under this business model?',
    },
  ],
}
