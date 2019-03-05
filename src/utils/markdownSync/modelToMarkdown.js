export default function modelToMarkdown(
  {
    header,
    props,
    sections,
  }
) {
  return `# ${header}
${props.map(({
    key,
    value,
  }) => `${key}:${value ? ` ${value}` : ''}`).join('\n')}

${sections.map(({
    key,
    header: sectionHeader,
    placeholder,
    content,
  }) => `## ${sectionHeader} {${key}}${placeholder ? `
[${placeholder}]` : ''}${content ? `
${content}` : ''}
`).join('\n')}
`
}
