import Card from './components/Card'
import { sectionControlTypes } from './controlTypes'


/**
 * We highjack the github flavored markup style for code blocks with language data to display our colored cards.
 */
export default function cardRenderer(contentBlock) {
  const type = contentBlock.getType()
  if (type === 'code-block') {
    const blockData = contentBlock.getData()

    const currentControlType = sectionControlTypes.find(
      (controlType) => controlType.type === 'code-block'
        && blockData.get('language') === (controlType.data && controlType.data.language)
    )

    return {
      component: Card,
      editable: true,
      props: {
        color: currentControlType && currentControlType.color,
      },
    }
  } else {
    return null
  }
}
