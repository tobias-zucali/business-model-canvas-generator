import React, { useMemo, useState } from 'react'
import splitMarkdown from 'utils/splitMarkdown'
import { mapObject, deepMergePlainObjects } from 'utils/object'
import logger from 'utils/logger'

import cloneDeep from 'lodash/cloneDeep'
import without from 'lodash/without'

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

const defaultData = {
  header: 'Your Business',
  props: {
    by: '',
    date: new Date().toLocaleDateString(),
    for: '',
    version: '1',
  },
  sections: {
    purpose: {
      content: '',
      header: 'Purpose',
      placeholder: '1) Always validate the model with the business purpose.',
    },
    'customer-segments': {
      content: '',
      header: 'Customer Segments',
      placeholder: '2) To build an effective business model, a company must identify which customers it tries to serve.',
    },
    'value-propositions': {
      content: '',
      header: 'Value Propositions',
      placeholder: '3) The collection of products and services a business offers to meet the needs of its customers.',
    },
    channels: {
      content: '',
      header: 'Channels',
      placeholder: '4) A company can deliver its value proposition to its targeted customers through different channels.',
    },
    'customer-relationships': {
      content: '',
      header: 'Customer Relationships',
      placeholder: '5) To ensure the survival and success of any businesses, companies must identify the type of relationship they want to create with their customer segments.',
    },
    'revenue-streams': {
      content: '',
      header: 'Revenue Streams',
      placeholder: '6) The way a company makes income from each customer segment.',
    },
    'key-resources': {
      content: '',
      header: 'Key Resources',
      placeholder: '7) The resources that are necessary to create value for the customer.',
    },
    'key-activities': {
      content: '',
      header: 'Key Activities',
      placeholder: '8) The most important activities in executing a company\'s value proposition.',
    },
    'key-partners': {
      content: '',
      header: 'Key Partners',
      placeholder: '9) In order to optimize operations and reduce risks of a business model, organizations usually cultivate buyer-supplier relationships so they can focus on their core activity.',
    },
    'cost-structure': {
      content: '',
      header: 'Cost Structure',
      placeholder: '10) This describes the most important monetary consequences while operating under different business models.',
    },
  },
}

const SECTION_KEYS = Object.keys(defaultData.sections)

const CanvasAreas = mapObject(defaultData.sections, (key) => styled(CanvasArea)`
  grid-area: ${key};
`)


export function getInitialData() {
  const storedDataString = localStorage.getItem('businessCanvasData')
  if (storedDataString) {
    try {
      const storedData = splitMarkdown(storedDataString)
      const storedSectionKeys = Object.keys(storedData.sections)
      const invalidSectionKeys = without(storedSectionKeys, SECTION_KEYS)

      if (invalidSectionKeys.length > 0) {
        logger.warn('Unknown sections found:', invalidSectionKeys)
      }

      return deepMergePlainObjects(
        defaultData,
        storedData
      )
    } catch (error) {
      logger.error('Reading stored canvas data failed')
      logger.error(error)
    }
  }
  return cloneDeep(defaultData)
}

function BusinessModelCanvas() {
  const [data, setData] = useState(
    useMemo(getInitialData, [])
  )
  const setSectionContent = (sectionKey, content) => {
    const nextData = deepMergePlainObjects(data, {
      sections: {
        [sectionKey]: {
          content,
        },
      },
    })
    logger.log(nextData)
    setData(nextData)
  }

  const [editorStates, setEditorStates] = useState({})
  const setSectionEditorState = (sectionKey, editorState) => setEditorStates({
    ...editorStates,
    [sectionKey]: editorState,
  })

  return (
    <GridContainer>
      {SECTION_KEYS.map((sectionKey) => {
        const SectionCanvasArea = CanvasAreas[sectionKey]
        return (
          <SectionCanvasArea
            editorState={editorStates[sectionKey]}
            key={sectionKey}
            onChange={({ content, editorState }) => {
              setSectionContent(sectionKey, content)
              setSectionEditorState(sectionKey, editorState)
            }}
            {...data.sections[sectionKey]}
          />
        )
      })}
    </GridContainer>
  )
}

export default BusinessModelCanvas
