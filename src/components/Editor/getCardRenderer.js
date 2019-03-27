import memoize from 'lodash/memoize'

import Card from './components/Card'


/**
 * We highjack the github flavored markup style for code blocks with language data to display our colored cards.
 */
export default memoize((cardStyles) => (contentBlock) => {
  const type = contentBlock.getType()
  if (type === 'code-block') {
    const blockData = contentBlock.getData()

    const currentCardStyle = cardStyles.find(
      (cardStyle) => blockData.get('language') === cardStyle.key
    )

    return {
      component: Card,
      editable: true,
      props: {
        color: currentCardStyle && currentCardStyle.color,
      },
    }
  } else {
    return null
  }
})
