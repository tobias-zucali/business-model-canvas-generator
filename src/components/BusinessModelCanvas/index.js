import React, { useMemo, useState } from 'react'
import useMarkdownSync from 'hooks/useMarkdownSync'

import memoize from 'lodash/memoize'

import CanvasArea from 'components/CanvasArea'
import styled from 'styled-components'


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose"
    "key-partners key-partners key-activities key-activities value-propositions value-propositions customer-relationships customer-relationships customer-segments customer-segments"
    "key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments"
    "cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams";
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
      content: '',
      header: 'Purpose',
      placeholder: '1) Always validate the model with the business purpose.',
    },
    {
      key: 'customer-segments',
      content: '',
      header: 'Customer Segments',
      placeholder: '2) To build an effective business model, a company must identify which customers it tries to serve.',
    },
    {
      key: 'value-propositions',
      content: '',
      header: 'Value Propositions',
      placeholder: '3) The collection of products and services a business offers to meet the needs of its customers.',
    },
    {
      key: 'channels',
      content: '',
      header: 'Channels',
      placeholder: '4) A company can deliver its value proposition to its targeted customers through different channels.',
    },
    {
      key: 'customer-relationships',
      content: '',
      header: 'Customer Relationships',
      placeholder: '5) To ensure the survival and success of any businesses, companies must identify the type of relationship they want to create with their customer segments.',
    },
    {
      key: 'revenue-streams',
      content: '',
      header: 'Revenue Streams',
      placeholder: '6) The way a company makes income from each customer segment.',
    },
    {
      key: 'key-resources',
      content: '',
      header: 'Key Resources',
      placeholder: '7) The resources that are necessary to create value for the customer.',
    },
    {
      key: 'key-activities',
      content: '',
      header: 'Key Activities',
      placeholder: '8) The most important activities in executing a company\'s value proposition.',
    },
    {
      key: 'key-partners',
      content: '',
      header: 'Key Partners',
      placeholder: '9) In order to optimize operations and reduce risks of a business model, organizations usually cultivate buyer-supplier relationships so they can focus on their core activity.',
    },
    {
      key: 'cost-structure',
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
    mapSections,
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
      {(mapSections(({ key, ...section }) => {
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
