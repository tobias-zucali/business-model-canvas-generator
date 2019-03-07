import React, { useState } from 'react'
import useMarkdownSync from 'hooks/useMarkdownSync'
import styled from 'styled-components'

import CanvasArea from 'components/CanvasArea'
import CanvasHeader from 'components/CanvasHeader'

import model from './model'


const GridContainer = styled.div`
  background-color: ${({ theme }) => theme.paperBackground};
  border-color: ${({ theme }) => theme.pageBackground};
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

  height: 100%;
  width: 100%;
  @media screen {
    min-width: 1000px;
    min-height: 600px;
  }
`

const StyledCanvasArea = styled(CanvasArea)`
  grid-area: ${({ gridArea }) => gridArea};
`

const StyledCanvasHeader = styled(CanvasHeader)`
  grid-area: ${({ gridArea }) => gridArea};
`


function BusinessModelCanvas() {
  const {
    header,
    props,
    sections,
    updateHeader,
    updateProperty,
    updateSection,
  } = useMarkdownSync({ model })

  const [editorStates, setEditorStates] = useState({})
  const setSectionEditorState = (sectionKey, editorState) => setEditorStates({
    ...editorStates,
    [sectionKey]: editorState,
  })

  return (
    <GridContainer>
      {(sections.map(({ isHeader, key, ...section }) => {
        const sectionProps = {
          editorState: editorStates[key],
          isSimple: isHeader,
          onChange: ({ content, editorState }) => {
            updateSection(key, { content })
            setSectionEditorState(key, editorState)
          },
          ...section,
        }
        if (isHeader) {
          return (
            <StyledCanvasHeader
              gridArea={key}
              header={header}
              key={key}
              onHeaderChange={updateHeader}
              onPropertyChange={updateProperty}
              props={props}
              sectionProps={sectionProps}
            />
          )
        } else {
          return (
            <StyledCanvasArea
              gridArea={key}
              key={key}
              {...sectionProps}
            />
          )
        }
      }))}
    </GridContainer>
  )
}

export default BusinessModelCanvas
