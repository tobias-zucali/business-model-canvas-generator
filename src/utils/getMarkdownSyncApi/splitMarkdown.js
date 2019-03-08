
const mainHeaderRegex = /^\s*#(?!#)\s*(.*)$/
const anyHeaderRegex = /^\s*#(.*)$/
const propertyRegex = /^\s*(\S+)\s*:(.*)$/
const sectionHeaderRegex = /^\s*##([^{]*){([^}]*)}(.*)$/
const placeholderRegex = /\[(.*)\S*\]/
const placeholderStartRegex = /\s*\[(.*)/
const placeholderEndRegex = /^\s*([^\]]*)]/


export default function splitMarkdown(content) {
  const lines = content.split('\n')

  const {
    header,
    index: headerIndex,
  } = findHeader(lines)

  const {
    props,
    lastIndex: lastPropIndex,
  } = findProps(lines, headerIndex + 1)

  const {
    sections,
  } = findSections(lines, lastPropIndex + 1)

  return {
    header,
    props,
    sections,
  }
}

export function findHeader(lines) {
  let currentIndex = 0

  while (currentIndex < lines.length) {
    const currentLine = lines[currentIndex]
    const headerMatch = currentLine.match(mainHeaderRegex)

    if (headerMatch) {
      const [/* fullMatch */, header] = headerMatch
      return {
        header: header.trim(),
        index: currentIndex,
      }
    }
    currentIndex += 1
  }
  return {
    header: '',
    index: -1,
  }
}

export function findProps(lines, startIndex) {
  let currentIndex = startIndex
  const props = []

  while (currentIndex < lines.length) {
    const currentLine = lines[currentIndex]
    const propertyMatch = currentLine.match(propertyRegex)

    if (propertyMatch) {
      const [/* fullMatch */, key, value] = propertyMatch
      props.push({
        key: key.trim(),
        value: value.trim(),
      })
    } else if (currentLine.match(anyHeaderRegex)) {
      break
    }
    currentIndex += 1
  }

  return {
    props,
    lastIndex: currentIndex - 1,
  }
}

export function findSections(lines, startIndex) {
  let currentIndex = startIndex
  const sections = []

  while (currentIndex < lines.length) {
    let currentLine = lines[currentIndex]
    const sectionHeaderMatch = currentLine.match(sectionHeaderRegex)

    if (sectionHeaderMatch) {
      const [/* fullMatch */, preHeader, key, postHeader] = sectionHeaderMatch

      const header = `${preHeader.trim()} ${postHeader.trim()}`.trim()

      const {
        placeholder,
        index: placeholderIndex,
      } = findPlaceholderText(lines, currentIndex + 1)

      currentIndex = placeholderIndex + 1 || currentIndex + 1
      const content = []

      while (currentIndex < lines.length && !(lines[currentIndex + 1] || '').match(sectionHeaderRegex)) {
        currentLine = lines[currentIndex]
        content.push(currentLine)
        currentIndex += 1
      }

      sections.push({
        key: key.trim(),
        header,
        placeholder,
        content: content.join('\n').trim(),
      })
    }
    currentIndex += 1
  }
  return {
    sections,
  }
}

export function findPlaceholderText(lines, startIndex) {
  let currentIndex = startIndex
  const placeholderLines = []

  while (currentIndex < lines.length) {
    const currentLine = lines[currentIndex].trim()

    if (placeholderLines.length === 0) {
      const placeholderMatch = currentLine.match(placeholderRegex)
      if (placeholderMatch) {
        const [/* fullMatch */, placeholder] = placeholderMatch
        return {
          placeholder: placeholder.trim(),
          index: currentIndex,
        }
      } else {
        const placeholderStartMatch = currentLine.match(placeholderStartRegex)
        if (placeholderStartMatch) {
          const [/* fullMatch */, placeholder] = placeholderStartMatch
          placeholderLines.push(placeholder.trim())
        } else if (currentLine !== '') {
          break
        }
      }
    } else if (placeholderLines.length > 0) {
      const placeholderEndMatch = currentLine.match(placeholderEndRegex)

      if (placeholderEndMatch) {
        const [/* fullMatch */, placeholder] = placeholderEndMatch
        placeholderLines.push(placeholder.trim())
        return {
          placeholder: placeholderLines.join('\n'),
          index: currentIndex,
        }
      } else {
        placeholderLines.push(currentLine)
      }
    }
    currentIndex += 1
  }
  return {
    placeholder: '',
    index: -1,
  }
}
