import React, { useMemo, useState } from 'react'
import useMarkdownSync from 'hooks/useMarkdownSync'

import memoize from 'lodash/memoize'

import CanvasArea from 'components/CanvasArea'
import styled from 'styled-components'


const GridContainer = styled.div`
  background-color: ${(props) => props.theme.paperBackground};
  border-color: ${(props) => props.theme.pageBackground};
  border-style: solid;
  border-width: 0.5em;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 1fr 1fr;
  grid-template-areas:
    "purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose"
    "key-partners key-partners key-activities key-activities value-propositions value-propositions customer-relationships customer-relationships customer-segments customer-segments"
    "key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments"
    "cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams";
  margin: auto;
  max-height: 1200px;
  max-width: 1600px;
  min-height: 100%;
`

const model = {
  header: 'Your Business',
  localStorageKey: 'businessModelCanvas',
  props: [
    {
      key: 'by',
      value: '',
    },
    {
      key: 'date',
      value: new Date().toLocaleDateString(),
    },
    {
      key: 'for',
      value: '',
    },
    {
      key: 'version',
      value: '1',
    },
  ],
  sections: [
    {
      key: 'purpose',
      border: [false, false, true, false],
      content: '',
      header: 'Purpose',
      placeholder: '1) Always validate the model with the business purpose.',
    },
    {
      key: 'customer-segments',
      border: [false, false, false, true],
      content: '',
      header: 'Customer Segments',
      placeholder: '2) To build an effective business model, a company must identify which customers it tries to serve.',
    },
    {
      key: 'value-propositions',
      border: [false, true, false, true],
      content: '',
      header: 'Value Propositions',
      placeholder: '3) The collection of products and services a business offers to meet the needs of its customers.',
    },
    {
      key: 'channels',
      border: [true, false, false, false],
      content: '',
      header: 'Channels',
      placeholder: '4) A company can deliver its value proposition to its targeted customers through different channels.',
    },
    {
      key: 'customer-relationships',
      border: [false, false, false, false],
      content: '',
      header: 'Customer Relationships',
      placeholder: '5) To ensure the survival and success of any businesses, companies must identify the type of relationship they want to create with their customer segments.',
    },
    {
      key: 'revenue-streams',
      border: [true, false, false, false],
      content: '',
      header: 'Revenue Streams',
      placeholder: '6) The way a company makes income from each customer segment.',
    },
    {
      key: 'key-resources',
      border: [true, false, false, false],
      content: '',
      header: 'Key Resources',
      placeholder: '7) The resources that are necessary to create value for the customer.',
    },
    {
      key: 'key-activities',
      border: [false, false, false, false],
      content: '',
      header: 'Key Activities',
      placeholder: '8) The most important activities in executing a company\'s value proposition.',
    },
    {
      key: 'key-partners',
      border: [false, true, false, false],
      content: '',
      header: 'Key Partners',
      placeholder: '9) In order to optimize operations and reduce risks of a business model, organizations usually cultivate buyer-supplier relationships so they can focus on their core activity.',
    },
    {
      key: 'cost-structure',
      border: [true, true, false, false],
      content: '',
      header: 'Cost Structure',
      placeholder: '10) This describes the most important monetary consequences while operating under different business models.',
    },
  ],
}

export function getCanvasArea(key) {
  const SectionCanvasArea = styled(CanvasArea)`
    grid-area: ${key};
  `
  return SectionCanvasArea
}


function BusinessModelCanvas() {
  const {
    sections,
    updateSection,
  } = useMarkdownSync({ model })


  const memoizedGetCanvasArea = useMemo(
    () => memoize(getCanvasArea),
    []
  )

  const [editorStates, setEditorStates] = useState({})
  const setSectionEditorState = (sectionKey, editorState) => setEditorStates({
    ...editorStates,
    [sectionKey]: editorState,
  })

  return (
    <GridContainer>
      {(sections.map(({ key, ...section }) => {
        const SectionCanvasArea = memoizedGetCanvasArea(key)
        return (
          <SectionCanvasArea
            editorState={editorStates[key]}
            key={key}
            onChange={({ content, editorState }) => {
              updateSection(key, { content })
              setSectionEditorState(key, editorState)
            }}
            {...section}
          />
        )
      }))}
    </GridContainer>
  )
}

export default BusinessModelCanvas
