import React, { useMemo, useState } from 'react'
import useMarkdownSync from 'hooks/useMarkdownSync'
import styled from 'styled-components'

import memoize from 'lodash/memoize'

import CanvasArea from 'components/CanvasArea'
import model from './model'


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

  height: 100%;
  width: 100%;
  @media screen {
    min-width: 1000px;
    min-height: 600px;
  }
`


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
