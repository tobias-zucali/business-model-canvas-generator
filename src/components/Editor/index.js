import React, { useCallback } from 'react';
import PropTypes from 'prop-types'
import { Editor as Slate } from 'slate-react'
// import { markdownToSlate, slateToMarkdown } from 'netlify-cms-widget-markdown/src/serializers'


function Editor({
  onChange,
  value,
}) {
  const onChangeCallback = useCallback(
    (element) => {
      // const markdownValue = slateToMarkdown(element.value)
      // onChange(markdownValue)
      onChange(element.value)
    },
    [],
  );
    
  // const slateValue = markdownToSlate(value)

  return (
    <Slate
      // value={slateValue}
      value={value}
      onChange={onChangeCallback}
    />
  )
}

Editor.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
}

export default Editor;
