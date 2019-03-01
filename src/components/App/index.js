import React, { useState } from 'react';
import Editor from '../Editor'
import { Value } from 'slate'

// import initialValue from './default.md'
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})


function App() {
  const [value, setValue] = useState(initialValue)

  return (
    <Editor
      value={value}
      onChange={setValue}
    />
  )
}

export default App;
