import React, { useMemo, useState } from 'react'
import useMarkdownSync from 'hooks/useMarkdownSync'
import styled from 'styled-components'
import { mapObject } from 'utils/object'

import Editor from 'components/Editor'
import Menu from 'components/Menu'
import CanvasHeader from 'components/CanvasHeader'
import CanvasArea from 'components/CanvasArea'

import model from './model'


const GridContainer = styled.div`
  background-color: ${({ theme }) => theme.paperBackground};
  border-color: ${({ theme }) => theme.pageBackground};
  border-style: solid;
  border-width: 0.5em;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 0.5fr 1fr 1fr 1fr;
  grid-template-areas:
    "menu menu menu menu menu menu menu menu menu menu"
    "purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose"
    "key-partners key-partners key-activities key-activities value-propositions value-propositions customer-relationships customer-relationships customer-segments customer-segments"
    "key-partners key-partners key-resources key-resources value-propositions value-propositions channels channels customer-segments customer-segments"
    "cost-structure cost-structure cost-structure cost-structure cost-structure revenue-streams revenue-streams revenue-streams revenue-streams revenue-streams";
  margin: auto;

  height: 100%;
  width: 100%;
  @media screen {
    min-width: 90em;
    min-height: 60em;
  }
`

const StyledCanvasArea = styled(CanvasArea)`
  grid-area: ${({ gridArea }) => gridArea};
`

const StyledCanvasHeader = styled(CanvasHeader)`
  grid-area: ${({ gridArea }) => gridArea};
`

const StyledMenu = styled(Menu)`
  grid-area: menu;
`

const getInitialEditorStates = (sections) => sections.reduce(
  (acc, section) => ({
    ...acc,
    [section.key]: Editor.createEditorStateFromMarkdown(section.content),
  }),
  {}
)


function BusinessModelCanvas() {
  const markdownSyncApi = useMarkdownSync({ model })

  const initialEditorStates = useMemo(
    () => getInitialEditorStates(markdownSyncApi.sections),
    []
  )

  const [editorStates, setEditorStates] = useState(initialEditorStates)
  const setSectionEditorState = (key, editorState) => {
    const nextEditorStates = {
      ...editorStates,
      [key]: editorState,
    }
    setEditorStates(nextEditorStates)
  }

  const updateEditorStates = () => {
    const nextEditorStates = mapObject(editorStates, (key, editorState) => Editor.updateEditorStateWithMarkdown(
      editorState,
      markdownSyncApi.getSection(key).content,
    ))
    setEditorStates(nextEditorStates)
  }
  const handleReset = () => {
    markdownSyncApi.reset()
    updateEditorStates()
  }
  const handleLoadFromFile = (file) => {
    markdownSyncApi.loadFromFile(
      file
    ).then(
      updateEditorStates
    )
  }

  return (
    <React.Fragment>
      <GridContainer>
        <StyledMenu
          loadFromFile={handleLoadFromFile}
          onReset={handleReset}
          onSaveAs={markdownSyncApi.saveAs}
        />
        {(markdownSyncApi.sections.map(({ isHeader, key, ...section }) => {
          const sectionProps = {
            editorState: editorStates[key],
            isSimple: isHeader,
            onChange: ({ content, editorState }) => {
              markdownSyncApi.updateSection(key, { content })
              setSectionEditorState(key, editorState)
            },
            ...section,
          }
          if (isHeader) {
            return (
              <StyledCanvasHeader
                gridArea={key}
                header={markdownSyncApi.header}
                key={key}
                onHeaderChange={markdownSyncApi.updateHeader}
                onPropertyChange={markdownSyncApi.updateProperty}
                getProperty={markdownSyncApi.getProperty}
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
    </React.Fragment>
  )
}

export default BusinessModelCanvas
