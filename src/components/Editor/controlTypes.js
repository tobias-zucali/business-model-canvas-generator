import React from 'react'

import { ReactComponent as FormatBold } from 'icons/formatBold.svg'
import { ReactComponent as FormatHeader } from 'icons/formatSize.svg'
import { ReactComponent as FormatItalic } from 'icons/formatItalic.svg'
import { ReactComponent as FormatListBulleted } from 'icons/formatListBulleted.svg'
import { ReactComponent as FormatListNumbered } from 'icons/formatListNumbered.svg'
import { ReactComponent as FormatQuote } from 'icons/formatQuote.svg'
import { ReactComponent as FormatStrikethrough } from 'icons/formatStrikethrough.svg'
import { ReactComponent as FormatUnderlined } from 'icons/formatUnderlined.svg'
import { ReactComponent as Note } from 'icons/note.svg'


export const blockControlTypes = [
  {
    label: 'Header',
    style: 'header-three',
    icon: <FormatHeader />,
  },
  {
    label: 'OK',
    style: 'code-block',
    data: { language: 'ok' },
    icon: <Note style={{ fill: 'green' }} />,
  },
  {
    label: 'Not OK',
    style: 'code-block',
    data: { language: 'not ok' },
    icon: <Note style={{ fill: 'red' }} />,
  },
  {
    label: 'Blockquote',
    style: 'blockquote',
    icon: <FormatQuote />,
  },
  {
    label: 'UL',
    style: 'unordered-list-item',
    icon: <FormatListBulleted />,
  },
  {
    label: 'OL',
    style: 'ordered-list-item',
    icon: <FormatListNumbered />,
  },
]

export const inlineControlTypes = [
  {
    label: 'Bold',
    style: 'BOLD',
    icon: <FormatBold />,
  },
  {
    label: 'Italic',
    style: 'ITALIC',
    icon: <FormatItalic />,
  },
  {
    label: 'Underline',
    style: 'UNDERLINE',
    icon: <FormatUnderlined />,
  },
  {
    label: 'Strikethrough',
    style: 'STRIKETHROUGH',
    icon: <FormatStrikethrough />,
  },
]
