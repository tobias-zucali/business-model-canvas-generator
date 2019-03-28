import { EditorState, Modifier, RichUtils } from 'draft-js'
import { stateFromMarkdown } from 'draft-js-import-markdown'
import { stateToMarkdown } from 'draft-js-export-markdown'


export const createEditorStateFromMarkdown = (md) => EditorState.createWithContent(
  stateFromMarkdown(md)
)
export const updateEditorStateWithMarkdown = (editorState, md) => EditorState.push(
  editorState,
  stateFromMarkdown(md)
)
export const getMarkdownFromEditorState = (editorState) => stateToMarkdown(
  editorState.getCurrentContent(),
  { gfm: true }
)


export const toggleInlineStyle = (editorState, inlineStyle) => RichUtils.toggleInlineStyle(
  editorState,
  inlineStyle
)

export const toggleBlockType = (editorState, blockType, blockData) => {
  const selectedBlock = getSelectedBlock(editorState)

  if (hasBlockType(selectedBlock, blockType) && !hasBlockData(selectedBlock, blockData)) {
    return setBlockData(editorState, blockData)
  }
  const toggledEditorState = RichUtils.toggleBlockType(
    editorState,
    blockType
  )
  return setBlockData(toggledEditorState, blockData)
}

export const getSelectedBlock = (editorState) => editorState.getCurrentContent().getBlockForKey(
  editorState.getSelection().getStartKey()
)

export const hasBlockType = (block, blockType) => block.getType() === blockType

export const hasBlockData = (block, blockData) => {
  const currentBlockData = block.getData()
  const blockDataKeys = Object.keys(blockData)
  if (currentBlockData.size !== blockDataKeys.length) {
    return false
  }
  const missingKey = blockDataKeys.find((key) => blockData[key] !== currentBlockData.get(key))
  return !missingKey
}

export const setBlockData = (editorState, data) => {
  const nextContentState = Modifier.setBlockData(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    data
  )
  return EditorState.push(
    editorState,
    nextContentState,
    'change-block-data'
  )
}

export const handleReturn = (event, editorState) => {
  if (event.shiftKey) {
    return RichUtils.insertSoftNewline(editorState)
  } else {
    // preserve language of code blocks
    const selectedBlock = getSelectedBlock(editorState)
    if (selectedBlock.getType() === 'code-block') {
      const blockData = selectedBlock.getData()
      const language = blockData.get('language')
      if (language) {
        const contentState = Modifier.splitBlock(
          editorState.getCurrentContent(),
          editorState.getSelection(),
        )
        return setBlockData(
          EditorState.push(editorState, contentState, 'split-block'),
          { language }
        )
      }
    }
  }
  return null
}
