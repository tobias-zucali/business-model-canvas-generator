import React from 'react'

import { ReactComponent as FormatBold } from 'icons/formatBold.svg'
import { ReactComponent as FormatHeader } from 'icons/formatSize.svg'
import { ReactComponent as FormatItalic } from 'icons/formatItalic.svg'
import { ReactComponent as FormatListBulleted } from 'icons/formatListBulleted.svg'
import { ReactComponent as FormatListNumbered } from 'icons/formatListNumbered.svg'
import { ReactComponent as FormatStrikethrough } from 'icons/formatStrikethrough.svg'
import { ReactComponent as FormatUnderlined } from 'icons/formatUnderlined.svg'
import { ReactComponent as Note } from 'icons/note.svg'


export const inlineControlTypes = [
  {
    label: 'Bold',
    type: 'BOLD',
    icon: <FormatBold />,
  },
  {
    label: 'Italic',
    type: 'ITALIC',
    icon: <FormatItalic />,
  },
  {
    label: 'Underline',
    type: 'UNDERLINE',
    icon: <FormatUnderlined />,
  },
  {
    label: 'Strikethrough',
    type: 'STRIKETHROUGH',
    icon: <FormatStrikethrough />,
  },
]
export const blockControlTypes = [
  {
    label: 'Header',
    type: 'header-three',
    icon: <FormatHeader />,
  },
  {
    label: 'UL',
    type: 'unordered-list-item',
    icon: <FormatListBulleted />,
  },
  {
    label: 'OL',
    type: 'ordered-list-item',
    icon: <FormatListNumbered />,
  },
]

// we use the type 'code-block' and the 'language' data entry to be able to convert it to markdown syntax.
export const sectionControlTypes = [
  {
    label: 'Card',
    type: 'code-block',
    data: {},
    icon: <Note />,
  },
  {
    label: 'Card OK',
    type: 'code-block',
    color: 'green',
    data: { language: 'ok' },
    icon: <Note />,
  },
  {
    label: 'Card Warn',
    type: 'code-block',
    color: 'orange',
    data: { language: 'warn' },
    icon: <Note />,
  },
  {
    label: 'Card Not OK',
    type: 'code-block',
    color: 'red',
    data: { language: 'not ok' },
    icon: <Note />,
  },
]
