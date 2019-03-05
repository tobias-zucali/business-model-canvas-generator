
const mainHeaderRegex = /^\s*#\s*(.*)$/
const anyHeaderRegex = /^\s*#(.*)$/
const propertyRegex = /^\s*(\S+)\s*:(.*)$/
const sectionHeaderRegex = /^\s*##([^{]*){([^}]*)}(.*)$/
const placeholderRegex = /\[(.*)\S*\]/


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
  const props = {}

  while (currentIndex < lines.length) {
    const currentLine = lines[currentIndex]
    const propertyMatch = currentLine.match(propertyRegex)

    if (propertyMatch) {
      const [/* fullMatch */, key, value] = propertyMatch
      props[key.trim()] = value.trim()
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
  const sections = {}

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

      sections[key.trim()] = {
        header,
        placeholder,
        content: content.join('\n').trim(),
      }
    }
    currentIndex += 1
  }
  return {
    sections,
  }
}

export function findPlaceholderText(lines, startIndex) {
  let currentIndex = startIndex
  const sections = {}

  while (currentIndex < lines.length) {
    const currentLine = lines[currentIndex]
    const placeholderMatch = currentLine.match(placeholderRegex)

    if (placeholderMatch) {
      const [/* fullMatch */, placeholder] = placeholderMatch
      return {
        placeholder: placeholder.trim(),
        index: currentIndex,
      }
    } else if (currentLine.trim() !== '') {
      return {
        placeholder: '',
        index: -1,
      }
    }
    currentIndex += 1
  }
  return {
    sections,
  }
}
