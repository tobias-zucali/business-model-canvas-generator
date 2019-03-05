export default function modelToMarkdown(
  {
    header,
    props,
    sections,
  }
) {
  return `# ${header}
${Object.keys(props).map((propKey) => `${propKey}:${props[propKey] ? ` ${props[propKey]}` : ''}`).join('\n')}

${Object.keys(sections).map((sectionKey) => {
    const {
      header: sectionHeader,
      placeholder,
      content,
    } = sections[sectionKey]

    return `## ${sectionHeader} {${sectionKey}}${placeholder ? `
[${placeholder}]` : ''}${content ? `}
${content}` : ''}
`
  }).join('\n')}
`
}
