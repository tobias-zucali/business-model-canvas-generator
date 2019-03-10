import Section from './components/Section'


const defaultLanguageColorMap = {
  'not ok': 'red',
  warn: 'yellow',
  ok: 'green',
}
/**
 * We highjack the github flavored markup style for code blocks to display our colored cards.
 */
export default function sectionBlockRenderer(contentBlock, languageColorMap = defaultLanguageColorMap) {
  const type = contentBlock.getType()
  if (type === 'code-block') {
    return {
      component: Section,
      editable: true,
      props: {
        languageColorMap,
      },
    }
  } else {
    return null
  }
}
